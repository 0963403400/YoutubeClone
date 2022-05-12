import React, { useEffect, useState } from 'react'
import SideBar from './components/Side_Bar/SideBar'
import { Container } from 'react-bootstrap'
import Header from './components/Header/Header'
import HomeScreen from './Screen/HomeScreen/HomeScreen'
import './_base.scss'
import './_app.scss'

import { BrowserRouter as Redirect,Route,Switch} from 'react-router-dom'
import LoginScreen from './Screen/LoginScreen/LoginScreen'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Layout=({chilren})=>{
  const [sidebar, toggleSidebar] = useState(false)
  const handleToggleSidebar = () => toggleSidebar(value => !value)
  return(
    <>
        <Header handleToggleSidebar={handleToggleSidebar}/>
        <div className='app__Container '>
            <SideBar  sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
            <Container fluid className='app_main' >
                {/* <HomeScreen/> */}
                {chilren}
            </Container>
        </div>
    </>
  )
}

const App = () => {
  // const {accessToken,loading}=useSelector(state=>state.auth)
  // const history=useHistory()
  // useEffect(()=>{
  //   if(!accessToken && !loading)
  //   {
  //     history.push('/auth')
  //   }
  // },[accessToken,loading,history])
  return (
    <>
    
      <Route path='/' exact>
        <Layout chilren={<HomeScreen />}> 
        </Layout>
      </Route>

      <Route path='/auth' exact >
        <LoginScreen />
      </Route>

      <Route path='/search'>
        <Layout chilren={<h1>Search something</h1>}>
        </Layout>
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    
    </>
  )
}

export default App
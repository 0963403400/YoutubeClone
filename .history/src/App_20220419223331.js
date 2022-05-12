import React, { useState } from 'react'
import SideBar from './components/Side_Bar/SideBar'
import { Container } from 'react-bootstrap'
import Header from './components/Header/Header'
import HomeScreen from './Screen/HomeScreen/HomeScreen'
import './_base.scss'
import './_app.scss'

import { BrowserRouter as Route,Router,Switch } from 'react-router-dom'

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
  
  return (
    <Router>
      <Route>
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>
    </Router>
  )
}

export default App
import React, { useState } from 'react'
import SideBar from './components/Side_Bar/SideBar'
import { Container } from 'react-bootstrap'
import Header from './components/Header/Header'
import HomeScreen from './Screen/HomeScreen/HomeScreen'
import './_base.scss'
import './_app.scss'
import LoginScreen from './Screen/LoginScreen/LoginScreen'


const App = () => {
  const [sidebar, toggleSidebar] = useState(false)
   const handleToggleSidebar = () => toggleSidebar(value => !value)
  return (
    <>
        {/* <Header handleToggleSidebar={handleToggleSidebar}/>
        <div className='app__Container '>
            <SideBar  sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
            <Container fluid className='app_main' >
                <HomeScreen/>
            </Container>
        </div> */}
        <LoginScreen />
    </>
  )
}

export default App
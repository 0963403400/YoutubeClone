import React, { useState } from 'react'
import SideBar from './components/Side_Bar/SideBar'
import { Container } from 'react-bootstrap'
import Header from './components/Header/Header'
import HomeScreen from './Screen/HomeScreen/HomeScreen'
import './_base.scss'
import './_app.scss'


const App = () => {
  const [StateSideBar, ChangeStateOfSideBar]=useState(false);
  const HandlerSideBar=()=>ChangeStateOfSideBar(StateSideBar=>!StateSideBar)
  return (
    <>
        <Header HandlerSideBar={HandlerSideBar}/>
        <div className='app__Container border border-info'>
            <SideBar HandlerSideBar={HandlerSideBar} StateSideBar={StateSideBar}/>
            <Container fluid className='app_main border border-warning' >
                <HomeScreen/>
            </Container>
        </div>
    </>
  )
}

export default App
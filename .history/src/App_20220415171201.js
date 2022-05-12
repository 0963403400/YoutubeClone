import React from 'react'
import SideBar from './components/Side_Bar/SideBar'
import { Container } from 'react-bootstrap'
import Header from './components/Header/Header'
import HomeScreen from './Screen/HomeScreen/HomeScreen'
import './_base.scss'
import './_app.scss'


const App = () => {
  return (
    <>
        <Header/>
        <div className='app_Container border border-info'>
            <SideBar/>
            <Container fluid className='app_main border border-warning' >
                <HomeScreen/>
            </Container>
        </div>
    </>
  )
}

export default App
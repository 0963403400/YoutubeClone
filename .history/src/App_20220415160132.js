import React from 'react'
import SideBar from './components/Side_Bar/SideBar'
import { Container } from 'react-bootstrap'
import Header from './components/Header/Header'
import HomeScreen from './Screen/HomeScreen/HomeScreen'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <>
        <Header/>
        <div className='app_Container'>
            <SideBar/>
            <Container fluid className='app_main' >
                <HomeScreen/>
            </Container>
        </div>
    </>
  )
}

export default App
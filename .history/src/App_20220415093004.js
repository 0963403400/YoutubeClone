import React from 'react'
import SideBar from './components/Side_Bar/SideBar'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <>
        <Header/>
        <div className='app_Container'>
            <SideBar/>

        </div>
    </>
  )
}

export default App
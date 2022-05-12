import React from 'react'
import { Navbar } from 'react-bootstrap'
import "./_Side_Bar.scss"
import {MdHome} from 'react-icons/md'

const SideBar = () => {
  return (
    <nav className='border border-danger sidebar'>
      <li>
        <MdHome size={23}/>
        <span>Home</span>
      </li>
    </nav>
  )
}

export default SideBar
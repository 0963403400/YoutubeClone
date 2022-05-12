import React from 'react'
import { Navbar } from 'react-bootstrap'
import "./_Side_Bar.scss"
import {MdHistory, MdHome, MdSubscriptions, MdThumbUp} from 'react-icons/md'

const SideBar = () => {
  return (
    <nav className='border border-danger sidebar'>
      <li>
        <MdHome size={23}/>
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions size={23}/>
        <span>Home</span>
      </li>
      <li>
        <MdThumbUp size={23}/>
        <span>Home</span>
      </li>
      <li>
        <MdHistory size={23}/>
        <span>Home</span>
      </li>
    </nav>
  )
}

export default SideBar
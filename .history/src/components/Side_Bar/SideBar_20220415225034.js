import React from 'react'
import { Navbar } from 'react-bootstrap'
import "./_Side_Bar.scss"
import {MdExitToApp, MdHistory, MdHome, MdLibraryBooks, MdSentimentDissatisfied, MdSubscriptions, MdThumbUp} from 'react-icons/md'

const SideBar = ({SideBar}) => {
  return (
    <nav  className={SideBar?'sidebar open':'sidebar'}>
      <li>
        <MdHome size={23}/>
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions size={23}/>
        <span>Subsciptions</span>
      </li>
      <li>
        <MdThumbUp size={23}/>
        <span>LIked Video</span>
      </li>
      <li>
        <MdHistory size={23}/>
        <span>History</span>
      </li>

      <li>
        <MdLibraryBooks size={23}/>
        <span>Library</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23}/>
        <span>I don't know</span>
      </li>
      <hr />
      <li>
        <MdExitToApp size={23}/>
        <span>Log out</span>
      </li>
      <hr />
    </nav>
  )
}

export default SideBar
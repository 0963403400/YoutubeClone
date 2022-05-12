import React from 'react'
import { Navbar } from 'react-bootstrap'
import "./_Side_Bar.scss"
import {MdExitToApp, MdHistory, MdHome, MdLibraryBooks, MdSentimentDissatisfied, MdSubscriptions, MdThumbUp} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { LOG_OUT } from '../../redux/actionType'
import { log_out } from '../../redux/actions/auth.action'

const SideBar = ({ sidebar, handleToggleSidebar }) => {
  const dispatch=useDispatch()
  const HandlerLog_Out=()=>{
    dispatch(log_out())
  }
  return (
    <nav  className={sidebar ? 'sidebar open' : 'sidebar'}
    onClick={()=>handleToggleSidebar()}
    >
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
      <li onClick={HandlerLog_Out()}>
        <MdExitToApp size={23}/>
        <span>Log out</span>
      </li>
      <hr />
    </nav>
  )
}

export default SideBar
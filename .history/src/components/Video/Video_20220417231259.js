import React from 'react'
import "./_Video.scss"
import {AiFillEye} from 'react-icons/ai'
import './_Video.scss'



const Video = () => {
  
  return (
    <div className='video'>
      <div className='video__top'>
      <img src="../public/images/react.jpg" alt='' />
        <span>05:43</span>
      </div>
      <div className='video__tittle'>
        Create app in 5 minutes by chintu
      </div>
      <div className='video__details'>
        <span>
          <AiFillEye /> 5m views
        </span>
        <span>5 days ago</span>


      </div>
      <div className='video__channel'>
        <img  alt='' />
        <p>Rainbow Hat Jr</p>
      </div>
    </div>
  )
}

export default Video
import React from 'react'
import "./_Video.scss"
import {AiFillEye} from 'react-icons/ai'
import './_Video.scss'
import reactImage from './react.png'




const Video = () => {
  
  return (
    <div className='video'>
      <div className='video__top'>
      <img src="/home/tuan291100/Desktop/youtube/src/images/download.jpeg" alt='' />
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
        <img src="/home/tuan291100/Desktop/youtube/src/images/react.jpg" alt='' />
        <p>Rainbow Hat Jr</p>
      </div>
    </div>
  )
}

export default Video
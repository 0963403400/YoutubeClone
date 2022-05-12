import React from 'react'
import "./_Video.scss"
import {AiFillEye} from 'react-icons/ai'
const Video = () => {
  return (
    <div className='video'>
      <div className='video__top'>
        <img src='' alt='' />
        <span>05:43</span>
      </div>
      <div className='video__tittle'>
        Create app in 5 minutes by chintu
      </div>
      <div className='video__details'>
        <span>
          <AiFillEye />
        </span>

      </div>
      <div className='video__channel'></div>
    </div>
  )
}

export default Video
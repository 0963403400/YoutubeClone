import React from 'react'
import { FaBars } from 'react-icons/fa'
import "./_Header.scss"

const Header = () => {
  return (
    <div className='border border-dark'>
      <FaBars
        className='header__menu'
        size={26}
      // onClick={() => handleToggleSidebar()}
      />
      <img
        src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
        alt=''
        className='header__logo'
      />
    </div>
  )
}

export default Header
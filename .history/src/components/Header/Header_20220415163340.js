import React from 'react'
import { FaBars } from 'react-icons/fa'
import "./_Header.scss"
import { AiOutlineSearch } from 'react-icons/ai'
import {MdNotifications} from 'react-icons/md'
import {MdApps} fromm 'react-icons/md'
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
      <form
      // onSubmit={handleSubmit}
      >
        <input
          type='text'
          placeholder='Search'
        // value={input}
        // onChange={e => setInput(e.target.value)}
        />
        <button type='submit'>
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className='header__icons'>
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src={user?.photoURL} alt='avatar' />
      </div>

    </div>
  )
}

export default Header
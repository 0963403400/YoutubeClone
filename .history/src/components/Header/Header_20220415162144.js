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
      <form 
      // onSubmit={handleSubmit}
      >
        <input
          type='text'
          placeholder='Search'
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type='submit'>
          <AiOutlineSearch size={22} />
        </button>
      </form>

    </div>
  )
}

export default Header
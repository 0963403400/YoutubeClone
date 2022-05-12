import React from 'react'
import './_LoginScreen.scss'
import { login } from '../../redux/actions/auth.action'
import { useDispatch } from 'react-redux'
const LoginScreen = () => {
  const dispatch= useDispatch()
  const handleLogin=()=>{
    dispatch(login())
  }
  return (
    <div className='login'>
        <div className='login__container'>
            <img src='http://pngimg.com/uploads/youtube/youtube_PNG2.png' alt=''/>
            <button>Login with google</button>
            <p>This project is made using YOUTUBE DATA API</p>
        </div>
    </div>
  )
}

export default LoginScreen
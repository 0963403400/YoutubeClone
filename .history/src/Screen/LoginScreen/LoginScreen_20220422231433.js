import React from 'react'
import './_LoginScreen.scss'
import { login } from '../../redux/actions/auth.action'
import { useDispatch, useSelector } from 'react-redux'
const LoginScreen = () => {
  const dispatch= useDispatch()
  const accessToken=useSelector(state=>state.accessToken)
  console.log('Nguyen HUy TUan' + accessToken)
  const handleLogin=()=>{
    dispatch(login())
  }
  return (
    <div className='login'>
        <div className='login__container'>
            <img src='http://pngimg.com/uploads/youtube/youtube_PNG2.png' alt=''/>
            <button onClick={handleLogin}>Login with google</button>
            <p>This project is made using YOUTUBE DATA API</p>
        </div>
    </div>
  )
}

export default LoginScreen
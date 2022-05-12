import React, { useEffect } from 'react'
import './_LoginScreen.scss'
import { login } from '../../redux/actions/auth.action'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
const LoginScreen = () => {
  const dispatch= useDispatch()
  const accessToken=useSelector(state=>state.auth.accessToken)
  console.log('Nguyen HUy TUan' + accessToken)
  const handleLogin=()=>{
    dispatch(login())
  }
  const history=useHistoryistory()
  useEffect(()=>{
    if(accessToken)
    {
      history.push('/')
    }
  },[accessToken,history])
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
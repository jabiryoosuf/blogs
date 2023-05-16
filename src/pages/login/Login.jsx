import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { LoginApi } from '../../Store/AuthSlice'

const Login = () => {
  const [login,setLogin]=useState({})
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleLoginSubmit=(e)=>{
    e.preventDefault()
    dispatch(LoginApi({login,navigate}))

  return (
    <div className='login'>
        <form onSubmit={handleLoginSubmit}  className="loginform">
            <span className="logintitle">login</span>
            <label htmlFor="">Email</label>
            <input onChange={(e) => setLogin({...login,email:e.target.value })} className='logininput' type="text" placeholder='enter your email ...' />
            <label htmlFor="">Password</label>
            <input onChange={(e) => setLogin({...login,password:e.target.value })} className='logininput' type="password" placeholder='enter your password ...' />
            <button className="loginbutton">Login</button>
        </form>
        <button className="loginregisterbutton">
          <Link className='link' to="/register">Rgister</Link>
          </button>

    </div>
  )
}
}

export default Login

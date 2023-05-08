import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
  return (
    <div className='login'>
        <form  className="loginform">
            <span className="logintitle">login</span>
            <label htmlFor="">Email</label>
            <input className='logininput' type="text" placeholder='enter your email ...' />
            <label htmlFor="">Password</label>
            <input className='logininput' type="password" placeholder='enter your password ...' />
            <button className="loginbutton">Login</button>
        </form>
        <button className="loginregisterbutton">
          <Link className='link' to="/register">Rgister</Link>
          </button>

    </div>
  )
}

export default Login

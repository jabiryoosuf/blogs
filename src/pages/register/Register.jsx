import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SignupApi } from "../../Store/AuthSlice";

const Register = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const [register,setRegister]=useState({})
  console.log(register);


  const handleSignuSubmit=(e)=>{
    e.preventDefault()
    dispatch(SignupApi({register,navigate}))
  }


  return (
    <div className="register">
      <form onSubmit={handleSignuSubmit}  className="registerform">
        <span className="registertitle">Register</span>
        <label htmlFor="">Username</label>
        <input  onChange={(e) => setRegister({...register,username:e.target.value })}
          className="registerinput"
          type="text"
          placeholder="enter your username ..."
        />
        <label htmlFor="">Email</label>
        <input  onChange={(e) => setRegister({...register,email:e.target.value })}
          className="registerinput"
          type="text"
          placeholder="enter your email ..."
        />
        <label htmlFor="">Password</label>
        <input onChange={(e) => setRegister({...register,password:e.target.value })}
          className="registerinput"
          type="password"
          placeholder="enter your password ..."
        />
        <button type="submit" className="registerbutton">Register</button>
      </form>
      <button className="registerregisterbutton">
        <Link  className="link" to="/login">Login</Link></button>
    </div>
  );
};

export default Register;

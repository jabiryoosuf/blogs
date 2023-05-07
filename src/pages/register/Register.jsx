import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <form className="registerform">
        <span className="registertitle">Register</span>
        <label htmlFor="">Username</label>
        <input
          className="registerinput"
          type="text"
          placeholder="enter your username ..."
        />
        <label htmlFor="">Email</label>
        <input
          className="registerinput"
          type="text"
          placeholder="enter your email ..."
        />
        <label htmlFor="">Password</label>
        <input
          className="registerinput"
          type="password"
          placeholder="enter your password ..."
        />
        <button className="registerbutton">Register</button>
      </form>
      <button className="registerregisterbutton">Login</button>
    </div>
  );
};

export default Register;

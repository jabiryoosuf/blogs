import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import profile from "../../assets/profile.jpeg";
import "./topbar.css";
import { Link, useNavigate } from "react-router-dom/dist";
import { HashLink } from "react-router-hash-link";

const Topbar = () => {
  const user=localStorage.getItem("token");
const navigate = useNavigate();



  const hanndlelogout=()=>{
   localStorage.removeItem("token");
   navigate("/")
  }
  return (
    <div className="top">
      <div className="topleft">
        <FaFacebookSquare className="topicon" />
        <FaInstagramSquare className="topicon" />
        <FaWhatsappSquare className="topicon" />
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <HashLink to="/">
            <li className="toplistitems"> HOME</li>
          </HashLink>
          <Link to="/about">
            <li className="toplistitems">ABOUT</li>
          </Link>
          <Link to="/contact">
            <li className="toplistitems">CONTACT</li>
          </Link>
          <Link to={user?"/write":"/login"}>
            <li className="toplistitems">WRITE</li>
          </Link>
          
          {user &&
          <li onClick={hanndlelogout} className="toplistitems">LOGOUT</li>
          
          }
        </ul>
      </div>
      <div className="topright">
        {user ? (
        <img className="topimg" src={profile} alt="profile" />
        ):(
          <ul className="toplist">
          <li className="toplistitems">
             <Link to="/login" className="link">LOGIN
          </Link>
          </li>
          <li className="toplistitems">
             <Link className="link" to="/register">REGISTER
          </Link>
          </li>
          </ul>
       
        )}
        <GoSearch className="topsearchicon" />
      </div>
    </div>
  );
};

export default Topbar;

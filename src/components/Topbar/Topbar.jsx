import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import profile from "../../assets/profile.jpeg";
import "./topbar.css";
import { Link } from "react-router-dom/dist";
import { HashLink } from "react-router-hash-link";

const Topbar = () => {
  const user=false
  return (
    <div className="top">
      <div className="topleft">
        <FaFacebookSquare className="topicon" />
        <FaInstagramSquare className="topicon" />
        <FaWhatsappSquare className="topicon" />
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <HashLink to="#home">
            <li className="toplistitems"> HOME</li>
          </HashLink>
          <Link to="/about">
            <li className="toplistitems">ABOUT</li>
          </Link>
          <Link to="/contact">
            <li className="toplistitems">CONTACT</li>
          </Link>
          <Link to="/write">
            <li className="toplistitems">WRITE</li>
          </Link>
          <li className="toplistitems">LOGOUT</li>
        </ul>
      </div>
      <div className="topright">
        {user ? (
                


        <img className="topimg" src={profile} alt="profile" />
        ):(
          <ul className="toplist">
          <li className="toplistitems">
             <Link className="link" to="/login">LOGIN
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

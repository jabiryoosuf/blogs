import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import {GoSearch} from "react-icons/go";
import profile from '../../assets/profile.jpeg'
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="top">
      <div className="topleft">
        <FaFacebookSquare className="topicon"/>
        <FaInstagramSquare className="topicon"/>
        <FaWhatsappSquare className="topicon" />
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="toplistitems"> HOME</li>
          <li className="toplistitems">ABOUT</li>
          <li className="toplistitems">CONTACT</li>
          <li className="toplistitems">WRITE</li>
          <li className="toplistitems">LOGOUT</li>
        </ul>
      </div>
      <div className="topright">
    <img className="topimg" src={profile} alt="profile" />
    <GoSearch className="topsearchicon" />
      </div>
    </div>
  );
};

export default Topbar;

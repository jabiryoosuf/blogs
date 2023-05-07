import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebartitle">ABOUT ME</span>
        <img src="" alt="" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, sint
          eos fugiat atque nam laboriosam tenetur dolores voluptate
        </p>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">CATEGORIES</span>
        <ul className="sidebarlist">
          <li className="sidebarlistitem">Life</li>
          <li className="sidebarlistitem">Music</li>
          <li className="sidebarlistitem">Style</li>
          <li className="sidebarlistitem">Sports</li>
          <li className="sidebarlistitem">cinema</li>
        </ul>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">FOLLOW US</span>
        <div className="sidebarsocial">
          <FaFacebookSquare className="sidebaricon" />
          <FaInstagramSquare className="sidebaricon" />
          <FaWhatsappSquare className="sidebaricon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

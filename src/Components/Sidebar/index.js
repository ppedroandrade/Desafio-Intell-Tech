import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";

import "./sidebar.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <div className="menu-bars">
          <button className="NavBtnLink react-icons" onClick={showSidebar}>
            <AiIcons.AiFillPlusSquare className="react-icons" size={20} />
            <span>Adicionar</span>
          </button>
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <div className="nav-menu-items" onClick={showSidebar}>
          <span className="navbar-toggle">
            <AiIcons.AiOutlineClose size={40} color={'#f1f1f1'} onClick={showSidebar} />
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

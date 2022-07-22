import React, { useState, useRef } from "react";
import {Rnd} from 'react-rnd';


import * as AiIcons from "react-icons/ai";
import * as GoIcons from "react-icons/go";

import "./sidebar.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const [img, setImg] = useState();

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };

  const Box = () => (
    <div
      className="box"
      style={{ margin: 0, height: '100%', paddingBottom: '40px', backgroundImage:`url(${img})`, zIndex: '-10' }}
    >
    </div>
  );

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
            <AiIcons.AiOutlineClose
              size={40}
              color={"#f1f1f1"}
              onClick={showSidebar}
            />
          </span>
        </div>

        <div className="sideBarBtn">
          <button className="sideBarBtn-gphc">
            <GoIcons.GoGraph size={40} color={"black"} />
            <span className="gphc-span">Gerar gráfico aleatorio</span>
          </button>
        </div>
        <button className="sideBarBtn-img" onClick={handleClick}>
          <AiIcons.AiOutlineFileImage size={70} color={"black"} />
          <span className="img-span">Fazer upload de imagem</span>
          <input
            style={{ display: "none" }}
            ref={inputRef}
            type="file"
            onChange={onImageChange}
          />
        </button>
      </nav>
      <Rnd
      default={{
        x: 750,
        y: 195,
        width: 500,
        height: 190,
      }}
      bounds="window"
    >
       <Box />
      </Rnd>
    </>
  );
}

export default Navbar;

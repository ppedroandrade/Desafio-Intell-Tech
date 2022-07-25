import React, { useState, useRef } from "react";

import * as AiIcons from "react-icons/ai";
import * as GoIcons from "react-icons/go";

import "./sidebar.css";

function SideBar({ setImg, setShowGraphic }) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };

  return (
    <>
        <div>
          <button className="add-btn react-icons" onClick={showSidebar}>
            <AiIcons.AiFillPlusSquare className="react-icons" size={20} />
            <span>Adicionar</span>
          </button>
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
          <button
            className="sideBarBtn-gphc"
            onClick={() =>
              setShowGraphic((prevShowGraphic) => !prevShowGraphic)
            }
          >
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
    </>
  );
}

export default SideBar;

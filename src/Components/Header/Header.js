import React from "react";

import { AiFillPrinter } from "react-icons/ai";
import usePrint from "../../Contexts/Components-Context/Services/usePrint";


import SideBar from "../Sidebar/sideBar";
import "./header.css";


const Header = ({setImg,setShowGraphic}) => {
const {handlePrint} = usePrint(); 
  return (
    <>
      <div className="Header">
        <SideBar setImg={setImg} setShowGraphic={setShowGraphic} />
        <div className="Header-Btn">
          <button className="Header-Btn-Printer" onClick={() => handlePrint()}>
            <AiFillPrinter size={25} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;

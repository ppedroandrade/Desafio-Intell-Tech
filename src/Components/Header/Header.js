import React from "react";
import { AiFillPrinter, AiFillPlusSquare } from "react-icons/ai";

import "./Header.css";

const Header = () => {
  return (
    <>
      {/* <div>
        <img src="../image/logo.png" alt="logo" />
      </div> */}

      <div className="nav">
        <div className="NavBtn">
          <button className="NavBtnLink">
            <AiFillPlusSquare className="opa" />
            Adicionar
          </button>
        </div>

        <div className="NavBtn">
          <button className="NavBtnLink">
            <AiFillPrinter className="NavBtnIcon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header ;

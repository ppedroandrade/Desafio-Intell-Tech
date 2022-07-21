import React from "react";
import { AiFillPrinter } from "react-icons/ai";
import Navbar from "../Sidebar";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="nav">
        <Navbar />
        <div className="NavBtn">
          <button className="NavBtnLinkPrinter">
            <AiFillPrinter size={25} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;

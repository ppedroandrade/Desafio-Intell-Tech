import React from "react";
import { AiFillPrinter, AiFillPlusSquare } from "react-icons/ai";

import "./NavBarStyle.css";

const Navbar = () => {
  return (
    <>
      {/* <div>
        <img src="../image/logo.png" alt="logo" />
      </div> */}

      <div className="nav">
        <div className="NavBtn">
          <button
            className="NavBtnLink"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <AiFillPlusSquare />
            Adicionar
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
           <ul>
            <li class="dropdown-item" href="#">
              Action
            </li>
            <li class="dropdown-item" href="#">
              Another action
            </li>
            </ul>
          </div>
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

export { Navbar };

// <div class="dropdown">
//   <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//     Dropdown button
//   </button>
//   <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//     <a class="dropdown-item" href="#">Action</a>
//     <a class="dropdown-item" href="#">Another action</a>
//     <a class="dropdown-item" href="#">Something else here</a>
//   </div>
// </div>

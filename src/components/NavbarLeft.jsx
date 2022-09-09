import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
import {FaHistory } from "react-icons/fa";
import { NavbarContainerLeft } from "./navbarLeft.css";

const NavbarLeft = () => {
  return (
    <NavbarContainerLeft>
      <img
        src={
          "https://i.pinimg.com/564x/c1/bb/37/c1bb376255586abc64326d0cc2a26c77.jpg"
        }
        alt=""
      />{" "}
      <div className="container-icon">
        <FaHistory className="icon" />
        <MdMessage className="icon" />
        <BsThreeDotsVertical className="icon" />
      </div>
    </NavbarContainerLeft>
  );
};

export default NavbarLeft;

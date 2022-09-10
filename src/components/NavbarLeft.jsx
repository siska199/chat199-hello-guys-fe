import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { NavbarContainerLeft, ContainerIcons, Icon } from "./navbarLeft.css";
import { useDispatch } from "react-redux";
import { handleModalProfile } from "../redux/features/profileSlice";
import SettingMenu from "./SettingMenu";

const NavbarLeft = () => {
  const [settingShow, setSettingShow] = useState(false);
  const dispatch = useDispatch();
  const handleShowProfile = () => {
    dispatch(handleModalProfile(true));
  };

  return (
    <NavbarContainerLeft>
      <img
        src={
          "https://i.pinimg.com/564x/c1/bb/37/c1bb376255586abc64326d0cc2a26c77.jpg"
        }
        alt=""
        onClick={() => handleShowProfile()}
      />{" "}
      <ContainerIcons>
        <Icon>
          <FaHistory className="icon" />
        </Icon>
        <Icon>
          <MdMessage className="icon" />
        </Icon>
        <Icon active={settingShow}>
          <BsThreeDotsVertical
            onClick={() => setSettingShow(settingShow ? false : true)}
            className="icon"
          />
        </Icon>
        {settingShow && <SettingMenu />}
      </ContainerIcons>
    </NavbarContainerLeft>
  );
};

export default NavbarLeft;

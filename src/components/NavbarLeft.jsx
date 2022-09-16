import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { NavbarContainerLeft, ContainerIcons, Icon } from "../styles/navbarLeft.css";
import { useDispatch, useSelector } from "react-redux";
import { handleModalProfile } from "../redux/features/profileSlice";
import SettingMenu from "./SettingMenu";

const NavbarLeft = () => {
  const userImage = useSelector((state) => state.profile.value.user?.image);
  const [settingShow, setSettingShow] = useState(false);
  const dispatch = useDispatch();
  const handleShowProfile = () => {
    dispatch(handleModalProfile(true));
  };

  return (
    <NavbarContainerLeft>
      <img src={userImage} alt="" onClick={() => handleShowProfile()} />{" "}
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

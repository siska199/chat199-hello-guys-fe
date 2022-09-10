import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { NavbarContainerLeft, ContainerIcons, Icon } from "./navbarLeft.css";
import { useDispatch, useSelector } from "react-redux";
import { handleModalProfile } from "../redux/features/profileSlice";
import SettingMenu from "./SettingMenu";
import { handleSettingMenu } from "../redux/features/settingSlice";

const NavbarLeft = () => {
  const settingMenuActive = useSelector(
    (state) => state.setting.value.settingMenu
  );
  const dispatch = useDispatch();
  const handleShowProfile = () => {
    dispatch(handleModalProfile(true));
  };
  const handleShowSettingMenu = () => {
    dispatch(handleSettingMenu(settingMenuActive ? false : true));
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
        <Icon active={settingMenuActive}>
          <BsThreeDotsVertical
            onClick={() => handleShowSettingMenu()}
            className="icon"
          />
        </Icon>
        {settingMenuActive && <SettingMenu />}
      </ContainerIcons>
    </NavbarContainerLeft>
  );
};

export default NavbarLeft;

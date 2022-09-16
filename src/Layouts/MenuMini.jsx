import React from "react";
import { useDispatch } from "react-redux";
import { ContainerMenuMini } from "./menuMini.css";
import { handleLogout } from "../redux/features/profileSlice";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useNavigate } from "react-router-dom";
const MenuMini = ({ menu }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleCLickMenu = (e) => {
    e.target.outerText.toLowerCase() === "keluar" &&
      dispatch(handleLogout()).then(() => {
        navigate("/");
        NotificationManager.success("Logout Success", "Success", 4000);
      });
  };
  return (
    <ContainerMenuMini>
      {menu.map((data, i) => (
        <div key={i} name={data} onClick={(e) => handleCLickMenu(e)}>
          {data}
        </div>
      ))}
      <NotificationContainer />
    </ContainerMenuMini>
  );
};

export default MenuMini;

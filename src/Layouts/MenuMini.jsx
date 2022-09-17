import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { ContainerMenuMini } from "./menuMini.css";
import { handleLogout } from "../redux/features/profileSlice";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useNavigate } from "react-router-dom";
import ChatContext, { TYPES_CHAT_REDUCER } from "../context/ChatContext";

const MenuMini = ({ menu }) => {
  const { socket, dispatch } = useContext(ChatContext);
  const dispatchRedux = useDispatch();
  let navigate = useNavigate();
  const handleCLickMenu = (e) => {
    e.target.outerText.toLowerCase() === "keluar" &&
      dispatchRedux(handleLogout()).then(() => {
        navigate("/");
        NotificationManager.success("Logout Success", "Success", 4000);
        socket.disconnect();
        dispatch({
          type: TYPES_CHAT_REDUCER.USER_DISCONNECTED,
        });
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

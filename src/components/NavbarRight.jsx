import React, { useState } from "react";
import { useContext } from "react";
import { BsArrowRight, BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import Contact from "../atoms/Contact";
import ChatContext, { TYPES_CHAT_REDUCER } from "../context/ChatContext";
import {
  ContainerNavbarRight,
  IconsContainer,
  Icon,
} from "../styles/navbarRight.css";

const NavbarRight = () => {
  const {
    dispatch,
    state: {
      activeContact: { image, username, id, status },
    },
  } = useContext(ChatContext);
  const [searchActive, setSearchActive] = useState(false);
  const handleBack = () => {
    dispatch({
      type: TYPES_CHAT_REDUCER.SET_ACTIVE_CONTACT,
      payload: null,
    });
  };
  return (
    <ContainerNavbarRight>
      <Contact
        id={id}
        image={image}
        username={username}
        info={status}
        type={"sum-receiver-info"}
      />
      <IconsContainer>
        {searchActive && <input />}
        <Icon
          className="icon-search"
          active={searchActive}
          onClick={() => setSearchActive(searchActive ? false : true)}
        >
          <BsSearch />
        </Icon>
        {!searchActive && (
          <>
            <Icon className="icon-setting">
              <BsThreeDotsVertical />
            </Icon>
            <Icon className="icon-arrow-back">
              <BsArrowRight onClick={() => handleBack()} />
            </Icon>
          </>
        )}
      </IconsContainer>
    </ContainerNavbarRight>
  );
};

export default NavbarRight;

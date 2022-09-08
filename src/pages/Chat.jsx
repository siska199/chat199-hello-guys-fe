import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import ContactInfo from "../components/ContactInfo";
import SearchContact from "../components/SearchContact";

import Page from "../Layouts/Page";
import {
  ContainerChat,
  ContainerContacts,
  ContainerLeft,
  ContainerRight,
  NavbarContainerLeft,
} from "./chat.css";

const Chat = () => {
  return (
    <Page>
      <ContainerChat>
        {/* Left */}
        <ContainerLeft>
          <NavbarContainerLeft>
            <ContactInfo />
            <BsThreeDotsVertical className="icon-dot-tree" />
          </NavbarContainerLeft>
          <SearchContact />
          <ContainerContacts>
            {[...Array(10)].map((_) => (
              <ContactInfo />
            ))}
          </ContainerContacts>
        </ContainerLeft>

        {/* Right */}
        <ContainerRight></ContainerRight>
      </ContainerChat>
    </Page>
  );
};

export default Chat;

import React from "react";
import ContactInfo from "../components/ContactInfo";
import NavbarLeft from "../components/NavbarLeft";
import NavbarRight from "../components/NavbarRight";
import SearchContact from "../components/SearchContact";
import AddMessage from "../components/AddMessage";
import Page from "../Layouts/Page";
import {
  ContainerChat,
  ContainerContacts,
  ContainerLeft,
  ContainerRight,
  ContainerMessages,
} from "./chat.css";

import { messages } from "../lib/data";
import Message from "../components/Message";

const Chat = () => {
  return (
    <Page>
      <ContainerChat>
        {/* Left */}
        <ContainerLeft>
          <NavbarLeft />
          <SearchContact />
          <ContainerContacts>
            {[...Array(10)].map((_) => (
              <ContactInfo type={"contact-receiver-info"} />
            ))}
          </ContainerContacts>
        </ContainerLeft>

        {/* Right */}
        <ContainerRight>
          <NavbarRight />
          <ContainerMessages>
            {messages.map((data, i) => (
              <Message data={data} />
            ))}
          </ContainerMessages>
          <AddMessage />
        </ContainerRight>
      </ContainerChat>
    </Page>
  );
};

export default Chat;

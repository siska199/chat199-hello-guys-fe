import React, { useState } from "react";
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
import { contacts } from "../lib/data";

const Chat = () => {
  const [contactActive, setContactActive] = useState(false);

  const handleOnClickContact = (id) => {
    setContactActive(id);
  };

  return (
    <Page>
      <ContainerChat>
        <ContainerLeft contactActive={contactActive}>
          <NavbarLeft />
          <SearchContact />
          <ContainerContacts>
            {contacts.map((data, i) => (
              <ContactInfo
                key={i}
                type={"contact-receiver-info"}
                image={data.image}
                username={data.username}
                info={data.lastMessage}
                handleOnClickContact={handleOnClickContact}
                id={data.id}
                active={contactActive === data.id ? true : false}
              />
            ))}
          </ContainerContacts>
        </ContainerLeft>

        <ContainerRight contactActive={contactActive}>
          <NavbarRight setContactActive={setContactActive} />
          <ContainerMessages>
            {messages.map((data, i) => (
              <Message data={data} key={i} />
            ))}
          </ContainerMessages>
          <AddMessage />
        </ContainerRight>
      </ContainerChat>
    </Page>
  );
};

export default Chat;

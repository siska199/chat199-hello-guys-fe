import React, { useState, useContext } from "react";
import SummaryContactInfo from "../components/SummaryContactInfo";
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

// import { messages } from "../lib/data";
// import { contacts } from "../lib/data";
// import { TYPES_CHAT_REDUCER } from "../context/ChatContext";
import { EVENTS_CHAT_SOCKET } from "../context/ChatContext";
import ContactInfo from "../components/ContactInfo";
import Message from "../components/Message";
import Profile from "../components/Profile";
import ChatContext from "../context/ChatContext";
import { useEffect } from "react";

const Chat = () => {
  const {
    socket,
    state: { contacts, messages, activeContact },
  } = useContext(ChatContext);
  const handleOnClickContact = (id) => {
    // dispatch({
    //   type: TYPES_CHAT_REDUCER.SET_ACTIVE_CONTACT,
    //   payload: data,
    // });
  };

  useEffect(() => {
    socket.emit(EVENTS_CHAT_SOCKET.LOAD_CONTACTS, 1);
  }, []);

  return (
    <Page>
      <ContainerChat>
        <ContainerLeft contactActive={activeContact}>
          <>
            <NavbarLeft />
            <SearchContact />
            <ContainerContacts>
              {contacts.length > 0 &&
                contacts.map((data, i) => (
                  <SummaryContactInfo
                    key={i}
                    id={data.id}
                    type={"contact-receiver-info"}
                    image ={data.image}
                    username = {data.username}
                    handleOnClickContact={handleOnClickContact}
                    active={
                      activeContact && activeContact.id === data.id
                        ? true
                        : false
                    }
                  />
                ))}
            </ContainerContacts>
          </>
          <Profile />
        </ContainerLeft>

        <ContainerRight contactActive={activeContact}>
          <NavbarRight setContactActive={handleOnClickContact} />
          <ContainerMessages>
            {messages.length > 0 &&
              messages.map((data, i) => <Message data={data} key={i} />)}
          </ContainerMessages>
          <AddMessage />
        </ContainerRight>
      </ContainerChat>
    </Page>
  );
};

export default Chat;

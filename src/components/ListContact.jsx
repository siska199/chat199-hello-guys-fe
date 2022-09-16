import React, { useEffect } from "react";
import { useContext } from "react";
import Contact from "../atoms/Contact";
import ChatContext from "../context/ChatContext";
import { ContainerListContact } from "../styles/listContact.css";
import { TYPES_CHAT_REDUCER } from "../context/ChatContext";
import { EVENTS_CHAT_SOCKET } from "../context/ChatContext";
import { useSelector } from "react-redux";

const ListContact = () => {
  const { id } = useSelector((state) => state.profile.value.user);
  const {
    socket,
    state: { contacts, activeContact },
    dispatch,
  } = useContext(ChatContext);

  useEffect(() => {
    socket.emit(EVENTS_CHAT_SOCKET.LOAD_CONTACTS, id);
  }, [socket]);

  const handleOnClickContact = (id) => {
    dispatch({
      type: TYPES_CHAT_REDUCER.SET_ACTIVE_CONTACT,
      payload: contacts.filter((data) => data.id === id)[0],
    });
    socket.emit(EVENTS_CHAT_SOCKET.LOAD_MESSAGES, id); //-->id = idReceiver
  };

  return (
    <ContainerListContact>
      {contacts.length > 0 &&
        contacts.map((data, i) => (
          <Contact
            key={i}
            id={data.id}
            type={"contact"}
            image={data.image}
            username={data.username}
            handleOnClickContact={handleOnClickContact}
            active={
              activeContact && activeContact.id === data.id ? true : false
            }
          />
        ))}
    </ContainerListContact>
  );
};

export default ListContact;

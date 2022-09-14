import { useState, useEffect } from "react";
import { createContext, useReducer } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");
const ChatContext = createContext(socket);

export const EVENTS_CHAT_SOCKET = {
  CONNECTION_ERROR: "CONNECTION_ERROR",
  NEW_MESSAGE: "NEW_MESSAGE",
  LOAD_CONTACTS: "LOAD_CONTACTS",
  CONTACTS: "CONTACTS",
};

export const TYPES_CHAT_REDUCER = {
  SET_USER: "SET_USER",
  SET_MESSAGES: "SET_MESSAGES",
  SET_CONTACTS: "SET_CONTACTS",
  SET_ACTIVE_CONTACT: "SET_ACTIVE_CONTACT",
  SET_NEW_MESSAGE: "SET_NEW_MESSAGE",
  DELETE_NEW_MESSAGES_SPECIFIED_USER: "DELETE_NEW_MESSAGES_SPECIFIED_USER",
};

const initialState = {
  user: 1,
  contacts: [],
  activeContact: null,
  messages: [],
  newMessages: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES_CHAT_REDUCER.SET_USER:
      return { ...state, user: action.payload };
    case TYPES_CHAT_REDUCER.SET_CONTACTS:
      return { ...state, contacts: action.payload };
    case TYPES_CHAT_REDUCER.SET_ACTIVE_CONTACT:
      return { ...state, activeContact: action.payload };
    case TYPES_CHAT_REDUCER.SET_MESSAGES:
      return { ...state, message: action.payload };
    case TYPES_CHAT_REDUCER.SET_NEW_MESSAGE:
      return { ...state, newMessages: action.payload };
    case TYPES_CHAT_REDUCER.DELETE_NEW_MESSAGES_SPECIFIED_USER:
      const idContactActive = state.activeContact.id;
      return {
        ...state,
        newMessages: [...state.newMessages].filter(
          (id) => id !== idContactActive
        ),
      };
    default:
      break;
  }
};

export const ChatContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  socket.on(EVENTS_CHAT_SOCKET.CONNECTION_ERROR, (err) => {
    new Error(err.message);
  });
  socket.on(EVENTS_CHAT_SOCKET.CONTACTS, (dataContacts) => {
    dispatch({
      type: TYPES_CHAT_REDUCER.SET_CONTACTS,
      payload: dataContacts,
    });
  });
  return (
    <ChatContext.Provider
      value={{
        socket,
        state,
        dispatch,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
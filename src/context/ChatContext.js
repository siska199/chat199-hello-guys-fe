import { createContext, useReducer } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

const ChatContext = createContext(null);
export const EVENTS_CHAT_SOCKET = {
  CONNECTION_ERROR: "CONNECTION_ERROR",
  SEND_MESSAGE: "SEND_MESSAGE",
  NEW_MESSAGE: "NEW_MESSAGE",
  LOAD_CONTACTS: "LOAD_CONTACTS",
  CONTACTS: "CONTACTS",
  LOAD_MESSAGES: "LOAD_MESSAGES",
  MESSAGES: "MESSAGES",
};

export const TYPES_CHAT_REDUCER = {
  SET_USER: "SET_USER",
  SET_MESSAGES: "SET_MESSAGES",
  SET_CONTACTS: "SET_CONTACTS",
  SET_ACTIVE_CONTACT: "SET_ACTIVE_CONTACT",
  SET_NEW_MESSAGE: "SET_NEW_MESSAGE",
  DELETE_NEW_MESSAGES_SPECIFIED_USER: "DELETE_NEW_MESSAGES_SPECIFIED_USER",
  USER_DISCONNECTED: "USER_DISCONNECTED",
};

const initialState = {
  user: localStorage.getItem("user"),
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
      return { ...state, messages: action.payload };
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
    case TYPES_CHAT_REDUCER.USER_DISCONNECTED:
      return {
        ...initialState,
      };
    default:
      break;
  }
};

export const ChatContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const user = useSelector((state) => state.profile.value.user);
  console.log("user: ", user)
  const socket = io("http://localhost:5000", {
    auth: {
      token: user?.token || localStorage.getItem("token")
    },
  });
  socket
    .off(EVENTS_CHAT_SOCKET.CONNECTION_ERROR)
    .on(EVENTS_CHAT_SOCKET.CONNECTION_ERROR, (err) => {
      new Error(err.message);
    });

  socket
    .off(EVENTS_CHAT_SOCKET.CONTACTS)
    .on(EVENTS_CHAT_SOCKET.CONTACTS, (dataContacts) => {
      dispatch({
        type: TYPES_CHAT_REDUCER.SET_CONTACTS,
        payload: dataContacts,
      });
    });

  socket
    .off(EVENTS_CHAT_SOCKET.MESSAGES)
    .on(EVENTS_CHAT_SOCKET.MESSAGES, (dataMessages) => {
      console.log(dataMessages);
      dispatch({
        type: TYPES_CHAT_REDUCER.SET_MESSAGES,
        payload: dataMessages,
      });
    });

  socket
    .off(EVENTS_CHAT_SOCKET.NEW_MESSAGE)
    .on(EVENTS_CHAT_SOCKET.NEW_MESSAGE, (idReceiver) => {
      socket.emit(EVENTS_CHAT_SOCKET.LOAD_MESSAGES, idReceiver);
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

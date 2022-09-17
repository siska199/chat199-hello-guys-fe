import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/store";
import "./styles/global.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ChatContextProvider } from "./context/ChatContext";
import "react-notifications/lib/notifications.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChatContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChatContextProvider>
    </Provider>
  </React.StrictMode>
);

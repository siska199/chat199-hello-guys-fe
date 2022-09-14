import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./features/profileSlice";
import contactReducer from "./features/contactSlice";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    contact: contactReducer,
  },
});

export default store;

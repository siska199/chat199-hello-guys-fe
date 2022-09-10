import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./features/profileSlice";
import settingReducer from "./features/settingSlice";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    setting: settingReducer,
  },
});

export default store;

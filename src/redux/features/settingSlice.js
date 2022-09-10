import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    settingMenu: false,
  },
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    handleSettingMenu: (state, action) => {
      state.value.settingMenu = action.payload;
    },
  },
});

export default settingSlice.reducer;
export const { handleSettingMenu } = settingSlice.actions;

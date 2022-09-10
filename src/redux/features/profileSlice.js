import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    modal: false,
  },
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    handleModalProfile: (state, action) => {
      state.value.modal = action.payload;
    },
  },
});

export default profileSlice.reducer;

export const { handleModalProfile } = profileSlice.actions;

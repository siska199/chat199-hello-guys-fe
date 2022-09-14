import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    modalContactInfo: false,
  },
};
const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    handleModalContactInfo: (state, action) => {
      state.value.modalContactInfo = action.payload;
    },
  },
});

export default contactSlice.reducer;

export const { handleModalContactInfo } = contactSlice.actions;

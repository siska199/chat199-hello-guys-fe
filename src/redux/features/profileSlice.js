import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API_ENDPOINTS from "../../lib/apiEndpoint";

const initialState = {
  value: {
    user: null,
    modal: false,
  },
};

const handleRegister = createAsyncThunk("profile/Register", async (form) => {
  try {
    console.log("form masuk: ", form);
    const dataUser = await fetch(API_ENDPOINTS.REGISTER, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((res) => res.json());
    dataUser.data.token && localStorage.setItem("token", dataUser.data.token);
    return {
      user: dataUser.data,
    };
  } catch (error) {
    console.log(error);
    return {
      error,
    };
  }
});

const handleGetProfileData = createAsyncThunk(
  "profile/profileData",
  async (token) => {
    try {
      const dataUser = await fetch(API_ENDPOINTS.GET_PROFILE, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json());

      return {
        user: dataUser.data,
      };
    } catch (error) {
      return {
        error,
      };
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    handleModalProfile: (state, action) => {
      state.value.modal = action.payload;
    },
  },
  extraReducers: {
    [handleRegister.pending]: (state, action) => {},
    [handleRegister.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.value.user = action.payload.user;
    },
    [handleRegister.rejected]: (state, action) => {},

    [handleGetProfileData.pending]: (state, action) => {},
    [handleGetProfileData.fulfilled]: (state, action) => {
      state.value.user = action.payload.user;
    },
    [handleGetProfileData.rejected]: (state, action) => {},
  },
});

export default profileSlice.reducer;

export const { handleModalProfile } = profileSlice.actions;
export { handleRegister, handleGetProfileData };

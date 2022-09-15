import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API_ENDPOINTS from "../../lib/apiEndpoint";
import API, { setAuthToken } from "../../lib/apiConfig";

const initialState = {
  value: {
    user: null,
    modal: false,
    error: null,
  },
};

const handleRegister = createAsyncThunk("profile/Register", async (form) => {
  try {
    const res = await API.post(API_ENDPOINTS.REGISTER, form, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.setItem("token", res.data.data.token);
    setAuthToken(res.data.data.token);
    return {
      user: res.data.data,
    };
  } catch (error) {
    return {
      error: error.response.data.message,
    };
  }
});

const handleLogin = createAsyncThunk("profile/Login", async (form) => {
  try {
    const res = await API.post(API_ENDPOINTS.LOGIN, form, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.setItem("token", res.data.data.token);
    setAuthToken(res.data.data.token);
    return {
      user: res.data.data,
    };
  } catch (error) {
    return {
      error: error.response.data.message,
    };
  }
});

const handleGetProfileData = createAsyncThunk(
  "profile/profileData",
  async (token) => {
    try {
      setAuthToken(token);
      const dataUser = await API.get(API_ENDPOINTS.USER);
      console.log("response dataUser: ", dataUser);
      return {
        user: dataUser.data.data,
      };
    } catch (error) {
      return {
        error: error.response.data.message,
      };
    }
  }
);

const handleUpdateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (form) => {
    console.log("form: ", form);
    try {
      const res = await API.patch(API_ENDPOINTS.USER, form, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("update res: ", res);
      return {};
    } catch (error) {
      return {
        error: error.response.data.message,
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
      if (action.payload.error) {
        state.value.error = action.payload.error;
        state.value.user = null;
      } else {
        state.value.user = action.payload.user;
        state.value.error = null;
      }
    },
    [handleRegister.rejected]: (state, action) => {},

    [handleLogin.pending]: (state, action) => {},
    [handleLogin.fulfilled]: (state, action) => {
      if (action.payload.error) {
        state.value.error = action.payload.error;
        state.value.user = null;
      } else {
        state.value.user = action.payload.user;
        state.value.error = null;
      }
    },
    [handleLogin.rejected]: (state, action) => {},

    [handleGetProfileData.pending]: (state, action) => {},
    [handleGetProfileData.fulfilled]: (state, action) => {
      state.value.user = action.payload.user;
    },
    [handleGetProfileData.rejected]: (state, action) => {},

    [handleUpdateProfile.pending]: (state, action) => {},
    [handleUpdateProfile.fulfilled]: (state, action) => {},
    [handleUpdateProfile.rejected]: (state, action) => {},
  },
});

export default profileSlice.reducer;

export const { handleModalProfile } = profileSlice.actions;
export {
  handleRegister,
  handleLogin,
  handleGetProfileData,
  handleUpdateProfile,
};

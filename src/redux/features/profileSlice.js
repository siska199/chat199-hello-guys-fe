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

const handleLogout = createAsyncThunk("profile/Logout", async () => {
  try {
    await API.get(API_ENDPOINTS.LOGOUT);
    localStorage.removeItem("token");
    return {
      
    };
  } catch (error) {
    return {
      error: error.response.data.message,
    };
  }
});

const handleGetProfileData = createAsyncThunk(
  "profile/profileData",
  async () => {
    try {
      setAuthToken(localStorage.getItem("token"));
      const dataUser = await API.get(API_ENDPOINTS.USER);
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
    try {
      await API.patch(API_ENDPOINTS.USER, form, {
        headers: {
          "Content-Type": "application/json",
        },
      });
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

    [handleLogout.pending]: (state, action) => {},
    [handleLogout.fulfilled]: (state, action) => {
      if (action.payload.error) {
        state.value.error = action.payload.error;
      } else {
        state.value.user = null;
      }
    },
    [handleLogout.rejected]: (state, action) => {},
  },
});

export default profileSlice.reducer;

export const { handleModalProfile } = profileSlice.actions;
export {
  handleRegister,
  handleLogin,
  handleLogout,
  handleGetProfileData,
  handleUpdateProfile,
};

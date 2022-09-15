import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api199/v1/",
});

export const setAuthToken = (token) => {
  console.log("get token: ", token);
  if (token) {
    API.defaults.headers.common["Authorization"] = `Barear ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};

export default API;

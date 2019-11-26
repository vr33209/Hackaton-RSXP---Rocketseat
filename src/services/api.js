import axios from "axios";

const api = axios.create({
  baseURL: "https://boxes-app-backend.herokuapp.com"
});

export default api;

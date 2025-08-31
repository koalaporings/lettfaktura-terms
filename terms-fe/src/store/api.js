import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});


export const getTextsByLanguage = (language) =>
  api.get(`/text/${language}`);

export default api;

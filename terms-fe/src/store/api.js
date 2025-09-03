import axios from "axios";

const api = axios.create({
  baseURL: "https://lettfaktura-terms-3r4w.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});


export const getTextsByLanguage = (language) =>
  api.get(`/text/${language}`);

export default api;

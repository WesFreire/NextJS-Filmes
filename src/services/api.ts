import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3", // Certifique-se de que a URL está correta
});

export default api;
import axios from "axios";

const api = axios.create({
  baseURL: "https://desafio-orizom.up.railway.app",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export { api };

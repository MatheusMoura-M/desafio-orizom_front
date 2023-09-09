import axios from "axios";

const api = axios.create({
  // baseURL: "https://desafio-orizom.up.railway.app",
  baseURL: "http://localhost:3000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export { api };

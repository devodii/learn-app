import axios from "axios";

export const api = axios.create({
  baseURL: "http://backend:3005/api/v1",
  timeout: 10000,
});

export {};

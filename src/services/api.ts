import axios from "axios";
// export const BASE_URL = import.meta.env.VITE_BASE_URL

const BASE_URL = import.meta.env.VITE_BASE_URL

export const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

authApi.defaults.headers.common["Content-Type"] = "application/json";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.MODE === "development" ?  "http://localhost:4000/api" : "/api",
  withCredentials: true,
});

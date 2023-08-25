import axios from "axios";

const config = {
  baseURL: "https://fakestoreapi.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const API = axios.create(config);

API.interceptors.request.use(
  async (conf) => {
    const token = undefined;
    if (token) {
      conf.headers.Authorization = `Bearer ${token}`;
    }
    return conf;
  },
  (error) => {
    console.error("request interceptor error", error);
    return Promise.reject(error);
  },
);

export default API;

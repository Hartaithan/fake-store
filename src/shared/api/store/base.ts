import axios from "axios";
import { API_URL } from "../../config";

const config = {
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const apiInstance = axios.create(config);

apiInstance.interceptors.request.use(
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

export default apiInstance;

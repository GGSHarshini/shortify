import axios from "axios";
import logger from "../logger";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // backend API endpoint
});

api.interceptors.request.use(
  (config) => {
    logger.log("API Request", config);
    return config;
  },
  (error) => {
    logger.error("API Request Error", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    logger.log("API Response", response);
    return response;
  },
  (error) => {
    logger.error("API Response Error", error);
    return Promise.reject(error);
  }
);

export default api;

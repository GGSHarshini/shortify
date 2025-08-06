import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",  // ✅ fixed to 3000
});

api.interceptors.request.use((config) => {
  console.log(`[REQUEST] ${config.method.toUpperCase()} ${config.url}`, config);
  return config;
});

api.interceptors.response.use(
  (response) => {
    console.log("[RESPONSE]:", response.data);
    return response;
  },
  (error) => {
    console.error("[API ERROR]:", error);
    return Promise.reject(error);
  }
);

export default api;


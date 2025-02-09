import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://localhost:7161/api",
});

// Add the token to the Authorization header for every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

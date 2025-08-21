import axios from "axios";
import { toast } from "react-toastify";

export const baseURL = "http://localhost:8080"; 

const axiosClient = axios.create({
  baseURL,
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  response => response, // If response is successful, return it
  error => {
      if (error.response && error.response.status === 401) {
          // Token expired or invalid
          sessionStorage.removeItem("isAuthenticated");
          toast.error("session expired, please login again");
          window.location.href = "/login"; 
      }
      return Promise.reject(error);
  }
);

export default axiosClient;

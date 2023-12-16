// src/services/api.js
import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api";
const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // The request was made, but the server responded with a status code outside of the 2xx range
      console.error("Response error status:", error.response.status);
      console.error("Response error data:", error.response.data);
    } else if (error.request) {
      // The request was made, but no response was received
      console.error("No response received:", error.request);
    } else {
      // Something happened in setting up the request that triggered an error
      console.error("Request setup error:", error.message);
    }

    // Handle the error (e.g., show a user-friendly error message)
    // You can throw the error again to propagate it to the component that made the request
    // throw error;
  }
);

export default api;

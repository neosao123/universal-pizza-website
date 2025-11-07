import axios from "axios";

const httpClient = axios.create({
 baseURL: import.meta.env.VITE_BASE_URL || "https://admin.panjabpizza.ca/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});


httpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


// Response Interceptor
httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data?.message || error.message);
    return Promise.reject(error);
  }
);

export default httpClient;

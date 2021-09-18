import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dev.kowi.in/api/",
});

export default axiosInstance;

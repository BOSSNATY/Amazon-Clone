import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://amazon-api-deploy-ku3w.onrender.com/",
});

export { axiosInstance };

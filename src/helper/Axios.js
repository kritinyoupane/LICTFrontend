import axios from "axios";
import { logout } from "./loginHelper";

export const baseURL = "http://127.0.0.1:8000/";

const axiosInstance = axios.create({
  baseURL: baseURL,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token)
    if (token) {
      config.headers["Authorization"] = "Token " + token;
    }
    return config;
  },
  function (error) {
    //console.log("interceptor ", error);
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    console.log(error.response)
    if([401,403].indexOf(error.response?.status) !== -1) {
       // logout()
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;

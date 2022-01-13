import axios from "axios";

import { ENDPOINT_API } from "../config/constants";

const api = axios.create({
  baseURL: ENDPOINT_API,
  responseType: "json",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("Falha na requisição");
    if (error.response) {
      console.log(error.response.status);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log(error.message);
    }
    return error;
  }
);

export default api;

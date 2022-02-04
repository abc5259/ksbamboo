import axios from "axios";
export const BASE_URL = "http://localhost:3050";

axios.defaults.baseURL = BASE_URL;

export const getUserAPI = (token: string) => {
  return axios
    .get(`/auth/user`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(response => response.data);
};

export const loginAPI = (data: { email: string; password: string }) => {
  return axios.post(`/auth/login`, data).then(response => response.data);
};

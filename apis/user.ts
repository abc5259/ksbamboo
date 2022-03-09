import axios from "axios";
import User from "../interfaces/user";
const JWT_EXPIRY_TIME = 60 * 1000;

export const getUserAPI = async () => {
  return axios
    .get(`/auth/user`)
    .then(response => response.data)
    .catch(error => {
      return false;
    });
};

export const loginAPI = (data: { email: string; password: string }) => {
  return axios.post(`/auth/login`, data).then(response => response.data);
};

//accessToken 재발급
export const newAccessTokenAPI = (): Promise<{ user: User }> => {
  return axios.post(`/auth/refresh`);
};

export const logoutAPI = () => {
  return axios.get(`/auth/logout`);
};

//notification
export const getAllNotifications = () => {
  return axios.get("/auth/notifications").then(response => response.data);
};

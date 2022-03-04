import axios from "axios";
const JWT_EXPIRY_TIME = 60 * 1000;

export const getUserAPI = async () => {
  return axios
    .get(`/auth/user`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      return false;
    });
};

export const loginAPI = (data: { email: string; password: string }) => {
  return axios.post(`/auth/login`, data).then(response => response.data);
};

//accessToken 재발급
export const newAccessTokenAPI = (data: {
  refresh_token: string;
}): Promise<{ accessToken: string }> => {
  return axios.post(`/auth/refresh`, data).then(response => response.data);
};

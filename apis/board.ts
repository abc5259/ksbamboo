import axios from "axios";
export const BASE_URL = "http://localhost:3050";

axios.defaults.baseURL = BASE_URL;

export const allBoardsAPI = (token: string) => {
  return axios
    .get(`/boards`, { headers: { Authorization: `Bearer ${token}` } })
    .then(response => response.data);
};

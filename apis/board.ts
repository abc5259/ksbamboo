import axios from "axios";
export const BASE_URL = "http://localhost:3050";

axios.defaults.baseURL = BASE_URL;

export const allBoardsAPI = (token: string) => {
  return axios
    .get(`/boards`, { headers: { Authorization: `Bearer ${token}` } })
    .then(response => response.data);
};

export const createBoardAPI = (data: {
  token: string;
  title: string;
  content: string;
  category: string;
}) => {
  return axios
    .post("/boards", data, {
      headers: { Authorization: `Bearer ${data.token}` },
    })
    .then(response => response.data);
};

export const allCategoryBoardsAPI = (token: string, category: string) => {
  return axios
    .get(`/boards/category/${category}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(response => response.data);
};

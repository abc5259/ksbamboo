import axios from "axios";
import { BASE_URL } from "../index";

export const getUserFetcher = (token: string) => {
  console.log(token);
  return axios
    .get(`${BASE_URL}/auth/user`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(response => response.data);
};

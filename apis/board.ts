import axios from "axios";
export const BASE_URL = "http://localhost:3050";

axios.defaults.baseURL = BASE_URL;

export const allBoardsAPI = () => {
  return axios.get(`/boards`).then(response => response.data);
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

export const allCategoryBoardsAPI = (category: string) => {
  return axios
    .get(`/boards/category/${category}`)
    .then(response => response.data);
};

export const getBoardAPI = (boardId: string) => {
  return axios.get(`/boards/${boardId}`).then(response => response.data);
};

export const deleteBoardAPI = ({
  boardId,
  token,
}: {
  boardId: number;
  token: string;
}) => {
  return axios
    .delete(`/boards/${boardId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(response => response.data);
};

//comment
export const createBoardCommentAPI = (data: {
  boardId: number;
  content: string;
  token: string;
}) => {
  return axios
    .post(
      `/boards/${data.boardId}/comment`,
      { content: data.content },
      {
        headers: { Authorization: `Bearer ${data.token}` },
      }
    )
    .then(response => response.data);
};

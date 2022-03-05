import axios from "axios";

export const allBoardsAPI = () => {
  return axios.get(`/boards`).then(response => response.data);
};

export const createBoardAPI = ({
  title,
  content,
  category,
}: {
  title: string;
  content: string;
  category: string;
}) => {
  return axios
    .post("/boards", { title, content, category })
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

export const deleteBoardAPI = ({ boardId }: { boardId: number }) => {
  return axios.delete(`/boards/${boardId}`).then(response => response.data);
};

export const editBoardAPI = ({
  title,
  content,
  boardId,
}: {
  title?: string;
  content?: string;
  boardId: number;
}) => {
  return axios
    .patch(`/boards/${boardId}`, { title, content })
    .then(response => response.data);
};

//comment
export const createBoardCommentAPI = (data: {
  boardId: number;
  content: string;
}) => {
  return axios
    .post(`/boards/${data.boardId}/comment`, { content: data.content })
    .then(response => response.data);
};

export const deleteBoardCommentAPI = ({
  boardId,
  commentId,
}: {
  boardId: number;
  commentId: number;
}) => {
  return axios
    .delete(`/boards/${boardId}/comment/${commentId}`)
    .then(response => response.data);
};

export const updateBoardCommentAPI = ({
  boardId,
  commentId,
  content,
}: {
  boardId: number;
  commentId: number;
  content: string;
}) => {
  return axios
    .patch(`/boards/${boardId}/comment/${commentId}`, { content })
    .then(response => response.data);
};

export const updateBoardLikesAPI = (boardId: number) => {
  return axios.patch(`/boards/${boardId}/like`, {});
};

export const getMyBoards = () => {
  return axios.get(`/boards/me`).then(response => response.data);
};

export const getMyCommentBoards = () => {
  return axios.get(`/boards/me/comment`).then(response => response.data);
};

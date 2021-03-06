import styled from "styled-components";

export const BoardWrapper = styled.div`
  overflow: hidden;
  /* max-width: 500px; */
  height: 350px;
  border-radius: 5px;
  background-color: ${props => props.theme.bgColor.lighter};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgb(255 255 255 / 5%) 0px 4px 16px 0px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: rgb(255 255 255 / 17%) 0px 4px 16px 0px;
  }
`;

export const Main = styled.div`
  padding: 20px;
  .board_info {
    .board_commentLength {
      font-size: 0.8rem;
      color: rgb(134, 142, 150);
    }
  }
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: 10px;
`;

export const Content = styled.p`
  font-size: 0.9rem;
  margin-bottom: 10px;
  word-break: break-word;
  overflow-wrap: break-word;
`;

export const Time = styled.div`
  font-size: 0.8rem;
  color: rgb(134, 142, 150);
`;

export const Bottom = styled.div`
  height: 10%;
  padding: 20px;
  border-top: 0.6px solid #dfdfdf;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.7rem;
`;

export const Author = styled.div`
  span {
    font-weight: 800;
  }
`;

export const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.accentColor};
`;

export const Like = styled.svg`
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 5px;
`;

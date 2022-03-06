import styled from "styled-components";

export const StyledBoardDetail = styled.div``;

export const Card = styled.div`
  background-color: ${props => props.theme.bgColor.lighter};
  padding: 20px;
`;

export const CardHeader = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Avatar = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 10px;
  background-color: ${props => props.theme.accentColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  span:nth-child(1) {
    font-size: 0.9rem;
    font-weight: 800;
  }
  span:nth-child(2) {
    font-size: 0.8rem;
    margin-top: 5px;
    color: rgb(134, 142, 150);
  }
`;

export const EditAndDelete = styled.div`
  font-size: 0.9rem;
  color: rgb(134, 142, 150);
  span {
    margin-left: 5px;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.textColor};
    }
  }
`;

export const CardInfo = styled.div`
  p {
    word-break: break-word;
    overflow-wrap: break-word;
    margin-bottom: 20px;
  }
  .cardInfo_status {
    display: flex;
    align-items: center;
    gap: 10px;
    .cardInfo_like,
    .cardInfo_star {
      display: flex;
      align-items: center;
      gap: 3px;
      span {
        color: ${props => props.theme.accentColor};
        font-size: 0.9rem;
      }
    }
  }
  .cardInfo_btns {
    display: flex;
    align-items: center;
    margin-top: 10px;
    gap: 10px;
  }
`;

export const LikeBtn = styled.div<{ isLike: boolean }>`
  background-color: ${props =>
    props.isLike ? props.theme.accentColor : "#e2e0e093"};
  padding: 8px 10px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.8rem;
  color: ${props => (props.isLike ? props.theme.textColor : "#737373")};
  cursor: pointer;
`;

export const StarBtn = styled.div<{ isStar: boolean }>`
  background-color: ${props => (props.isStar ? "#F7BE00" : "#e2e0e093")};
  padding: 8px 10px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.8rem;
  color: ${props => (props.isStar ? props.theme.textColor : "#737373")};
  cursor: pointer;
`;

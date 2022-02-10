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

export const CardInfo = styled.div``;

import styled from "styled-components";

export const StyledAvatar = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 10px;
  background-color: ${props => props.theme.accentColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

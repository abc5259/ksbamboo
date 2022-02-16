import styled from "styled-components";

export const StyledMobileSideBarBtn = styled.div`
  position: fixed;
  z-index: 999999;
  bottom: 40px;
  right: 30px;
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 60%;
  background-color: ${props => props.theme.accentColor};
  cursor: pointer;
`;

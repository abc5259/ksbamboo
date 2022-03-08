import styled from "styled-components";

export const StyledNotice = styled.div`
  position: fixed;
  z-index: 1000;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: ${props => props.theme.accentColor};
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  span {
    font-size: 0.9rem;
    color: white;
  }
`;

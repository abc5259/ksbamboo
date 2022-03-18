import styled from "styled-components";

export const StyledNotificationIcon = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    fill: ${props => props.theme.accentColor};
    font-weight: 700;
    stroke: ${props => props.theme.accentColor};
    stroke-width: 1px;
  }
`;

export const Alram = styled.div`
  position: absolute;
  top: 6px;
  right: 8px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
`;

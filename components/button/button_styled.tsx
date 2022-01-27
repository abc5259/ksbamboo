import styled, { css } from "styled-components";
import { IButton } from ".";

const StyledButton = styled.button.attrs(props => ({}))<IButton>`
  ${props => {
    const backColor = props.backColor || "red";
    return css`
      /* background-size: 0; */
      background-repeat: no-repeat;
      background-color: ${backColor};
      color: #fff;
      width: 100%;
      height: 45px;
      border: none;
      padding: 5px 10px;
      font-size: 1em;
      font-weight: 500;
      outline: none;
      cursor: pointer;
      transition: all 0.3s;

      /* &:hover {
        background-size: 100%;
        color: #fff;
      } */
    `;
  }};
`;

export default StyledButton;

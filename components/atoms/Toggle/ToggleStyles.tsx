import styled from "styled-components";

export const StyledToggle = styled.div<{
  fontSize?: string;
  up?: boolean;
  mb?: string;
}>`
  display: inline-flex;
  align-items: center;
  color: ${props => (!props.up ? "#6d6d6d" : props.theme.textColor)};
  cursor: pointer;
  margin-bottom: ${props => props.mb};
  font-weight: 600;
  &:hover {
    color: ${props => props.theme.textColor};
  }
  span {
    margin-right: 5px;
    font-size: ${props => props.fontSize || "1rem"};
  }
`;

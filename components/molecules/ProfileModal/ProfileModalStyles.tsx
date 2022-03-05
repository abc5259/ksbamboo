import styled from "styled-components";

export const StyledProfileModal = styled.nav`
  width: 192px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.bgColor};
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
  .profileModal_child {
    cursor: pointer;
    font-size: 0.9rem;
    padding: 12px 16px;
    color: ${props => props.theme.textColor};
  }
  .profileModal_child:hover {
    background-color: #f8f9fa;
    color: ${props => props.theme.accentColor};
  }
`;

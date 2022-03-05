import styled from "styled-components";

export const StyledProfileModal = styled.nav`
  .profileModal {
    position: absolute;
    z-index: 10000000;
    right: 0;
    top: 0;
    height: fit-content;
    margin-top: 80px;
    margin-right: 90px;
    width: 192px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
    .profileModal_child {
      background-color: inherit;
      cursor: pointer;
      font-size: 0.9rem;
      padding: 12px 16px;
      color: ${props => props.theme.textColor};
    }
    .profileModal_child:hover {
      background-color: #f8f9fa;
      color: ${props => props.theme.accentColor};
    }
  }
`;

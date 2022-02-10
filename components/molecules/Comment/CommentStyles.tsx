import styled from "styled-components";

export const StyledComment = styled.div`
  .comment_info {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    h3 {
      flex: 1;
    }
    .commment_deletAndEdit {
      color: rgb(134, 142, 150);
      svg {
        cursor: pointer;
        &:hover {
          color: ${props => props.theme.textColor};
        }
      }
    }
  }
  p {
    margin-bottom: 5px;
  }
`;

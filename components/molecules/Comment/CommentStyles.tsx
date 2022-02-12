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
      font-size: 0.9rem;
      span {
        color: rgb(134, 142, 150);
        margin-left: 5px;
        cursor: pointer;
        &:hover {
          color: ${props => props.theme.textColor};
        }
      }
    }
  }
  p {
    margin-bottom: 5px;
    word-break: break-word;
    overflow-wrap: break-word;
  }
`;

import styled from "styled-components";

export const StyledNotificationCard = styled.div`
  display: flex;
  justify-content: space-between;
  .notification_info {
    display: flex;
    align-items: center;
    gap: 5px;
    .notification_message {
      line-height: 23px;
      p {
        font-weight: 400;
        font-size: 12px;
        color: #80878e;
      }
    }
  }
`;

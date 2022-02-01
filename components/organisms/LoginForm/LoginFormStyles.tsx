import styled from "styled-components";

export const LoginContainer = styled.div`
  min-width: 250px;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;
export const Title = styled.h1`
  font-size: 22px;
  margin-bottom: 8px;
`;
export const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const Register = styled.p`
  margin-top: 20px;
  text-align: center;
  span {
    margin-right: 10px;
  }
  a {
    color: ${props => props.theme.accentColor};
  }
`;

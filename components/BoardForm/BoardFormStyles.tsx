import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${props => props.theme.bgColor.lighter};
  margin: 30px 0;
`;

export const Input = styled.input`
  width: 50%;
`;

export const TextArea = styled.textarea`
  height: 50px;
`;

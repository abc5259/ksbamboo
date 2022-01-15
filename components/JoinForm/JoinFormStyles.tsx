import styled from "styled-components";

export const JoinContainer = styled.div`
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

export const SelectWrapper = styled.div`
  select {
    width: 100%;
    &:focus {
      border-color: inherit;
    }
  }
`;

export const InputWrapper = styled.div``;

export const Select = styled.select`
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  border-radius: 12px;
`;

export const Label = styled.label`
  display: block;
  padding: 5px;
  font-size: 12px;
  color: #8b949e;
`;

export const Input = styled.input.attrs({ require: true })`
  width: 100%;
  font-size: 18px;
  padding: 10px 5px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
`;

export const Button = styled.button`
  border: none;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: 10px;
  font-size: 18px;
  background-color: ${props => props.theme.accentColor};
  cursor: pointer;
`;

export const Join = styled.p`
  margin-top: 20px;
  text-align: center;
  span {
    margin-right: 10px;
  }
  a {
    color: ${props => props.theme.accentColor};
  }
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

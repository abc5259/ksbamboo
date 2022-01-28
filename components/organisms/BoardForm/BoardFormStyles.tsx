import { motion } from "framer-motion";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
  background-color: ${props => props.theme.bgColor.lighter};
  color: ${props => props.theme.textColor};
  font-size: 1.1rem;
  margin: 30px 0;
  border-radius: 5px;
`;

export const Input = styled.input`
  width: 50%;
  padding: 10px;
  border: none;
  color: inherit;
  font-size: inherit;
  background-color: #e7f5e9;
  border-radius: 7px;
  &:focus {
    outline-color: #6eb9d4;
  }
`;

export const TextArea = styled(motion.textarea)`
  height: 50px;
  padding: 10px;
  color: inherit;
  border: none;
  resize: none;
  transform-origin: center top;
  background-color: #e7f5e9;
  font-size: inherit;
  border-radius: 7px;
  &:focus {
    outline-color: #6eb9d4;
  }
`;

export const Button = styled.button`
  border: none;
  width: 100px;
  height: 45px;
  border-radius: 7px;
  font-weight: 800;
  background-color: #e7f5e9;
  cursor: pointer;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 0.9rem;
`;

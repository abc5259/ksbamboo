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
  background-color: #adc2a9;
  border-radius: 7px;
  &:focus {
    outline-color: #fef5ed;
  }
`;

export const TextArea = styled(motion.textarea)`
  height: 50px;
  padding: 10px;
  color: inherit;
  border: none;
  transform-origin: center top;
  /* height: 300px; */
  background-color: #adc2a9;
  font-size: inherit;
  border-radius: 7px;
  &:focus {
    outline-color: #fef5ed;
  }
`;

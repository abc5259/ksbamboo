import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledTextarea = styled(motion.textarea)`
  border: none;
  resize: none;
  font-family: inherit;
  font-size: inherit;
  transform-origin: center top;
  width: 100%;
  height: 50px;
  padding: 10px 5px;
  color: inherit;
  font-size: 0.9rem;
  border-radius: 7px;
  background-color: #e7f5e9;
  &:focus {
    outline-color: #6eb9d4;
  }
`;

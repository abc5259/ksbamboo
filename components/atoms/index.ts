import { ReactNode } from "react";
import Button from "./Button/Button";
import Input from "./Input/Input";
import Like from "./Like/Like";
import Message from "./Message/Message";
import Textarea from "./Textarea/Textarea";

interface Atom {
  Button: () => ReactNode;
  Input: () => ReactNode;
  Like: () => ReactNode;
  Message: () => ReactNode;
  Textarea: () => ReactNode;
}

const Atom = {
  Button,
  Input,
  Like,
  Message,
  Textarea,
};

export default Atom;

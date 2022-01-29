import { ReactNode } from "react";
import Button from "./Button/Button";
import Input from "./Input/Input";
import Like from "./Like/Like";
import Message from "./Message/Message";

interface Atom {
  Button: () => ReactNode;
  Input: () => ReactNode;
  Like: () => ReactNode;
  Message: () => ReactNode;
}

const Atom = {
  Button,
  Input,
  Like,
  Message,
};

export default Atom;

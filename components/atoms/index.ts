import { ReactNode } from "react";
import Button from "./Button/Button";
import Input from "./Input/Input";
import Like from "./Like/Like";

interface Atom {
  Button: () => ReactNode;
  Input: () => ReactNode;
  Like: () => ReactNode;
}

const Atom = {
  Button,
  Input,
  Like,
};

export default Atom;

import { UseFormRegisterReturn } from "react-hook-form";
import Atom from "../../atoms";
import { StyledBoardInput } from "./BoardIputStyles";

export interface IBoardInputProps {
  register?: UseFormRegisterReturn;
}

const BoardInput = (props: IBoardInputProps) => {
  return (
    <StyledBoardInput>
      <Atom.Input
        register={props.register}
        type="text"
        placeholder="제목"
        width="50%"
        bgColor="#e7f5e9"
        outlineColor="#6eb9d4"
        fontSize="inherit"
        borderRadius="7px"
      />
    </StyledBoardInput>
  );
};

export default BoardInput;

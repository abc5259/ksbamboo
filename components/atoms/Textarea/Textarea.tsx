import { useAnimation } from "framer-motion";
import { UseFormRegisterReturn } from "react-hook-form";
import { StyledTextarea } from "./TextareaStyles";

export interface IAtomTextareaProps {
  placeholder?: string;
  register: UseFormRegisterReturn;
  animateheight?: number;
  value: string;
}

const Textarea: React.FC<IAtomTextareaProps> = props => {
  const textAreaAnimation = useAnimation();

  const onTextAreaFocus = () => {
    textAreaAnimation.start({
      height: props.animateheight ? props.animateheight : 50,
    });
  };

  const onTextAreaBlur = () => {
    if (props.value) return;
    textAreaAnimation.start({ height: 50 });
  };

  return (
    <StyledTextarea
      animate={textAreaAnimation}
      transition={{ type: "linear" }}
      {...props}
      {...props.register}
      spellCheck={false}
      onFocus={onTextAreaFocus}
      onBlur={onTextAreaBlur}
    >
      {props.children}
    </StyledTextarea>
  );
};

export default Textarea;

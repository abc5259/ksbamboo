import { StyledLike } from "./LikeStyles";

export interface IAtomLikeProps {
  width?: string;
  height?: string;
  fillColor?: string;
  mr?: string;
}

const Like = (props: IAtomLikeProps) => {
  return (
    <StyledLike {...props} viewBox="0 0 24 24">
      <path d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"></path>
    </StyledLike>
  );
};

export default Like;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { StyledAvatar } from "./AvatarStyles";

export interface IAtomAvatarProps {
  className?: string;
}

const Avatar = (props: IAtomAvatarProps) => {
  return (
    <StyledAvatar className={props.className}>
      <FontAwesomeIcon icon={faUser} size={"sm"} />
    </StyledAvatar>
  );
};

export default Avatar;

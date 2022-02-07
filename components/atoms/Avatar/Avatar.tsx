import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { StyledAvatar } from "./AvatarStyles";

export interface IAtomAvatarProps {}

const Avatar = (props: IAtomAvatarProps) => {
  return (
    <StyledAvatar>
      <FontAwesomeIcon icon={faUser} size={"sm"} />
    </StyledAvatar>
  );
};

export default Avatar;

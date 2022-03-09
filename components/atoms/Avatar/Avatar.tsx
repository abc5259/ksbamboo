import { StyledAvatar } from "./AvatarStyles";

export interface IAtomAvatarProps {
  className?: string;
  width?: string;
}

const Avatar = (props: IAtomAvatarProps) => {
  return (
    <StyledAvatar className={props.className}>
      <svg
        width={props.width ? props.width : "24"}
        height={props.width ? props.width : "24"}
        viewBox="0 0 24 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 12C15.315 12 18 9.315 18 6C18 2.685 15.315 0 12 0C8.685 0 6 2.685 6 6C6 9.315 8.685 12 12 12ZM12 15C7.995 15 0 17.01 0 21V23C0 23.5523 0.447715 24 1 24H23C23.5523 24 24 23.5523 24 23V21C24 17.01 16.005 15 12 15Z" />
      </svg>
    </StyledAvatar>
  );
};

export default Avatar;

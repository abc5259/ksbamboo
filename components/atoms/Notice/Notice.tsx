import { StyledNotice } from "./NoticeStyles";

export interface IAtomNoticeProps {
  onClick: () => void;
}

const Notice: React.FC<IAtomNoticeProps> = ({ children, onClick }) => {
  return (
    <StyledNotice onClick={onClick}>
      <span>{children}</span>
    </StyledNotice>
  );
};

export default Notice;

import Link from "next/link";
import { StyledProfileModal } from "./ProfileModalStyles";

export interface IProfileModalProps {}

const ProfileModal = (props: IProfileModalProps) => {
  return (
    <StyledProfileModal>
      <div className="profileModal">
        <Link href="/profile/write">
          <a className="profileModal_child">내가 쓴글</a>
        </Link>
        <Link href="/profile/commentpost">
          <a className="profileModal_child">댓글 단 글</a>
        </Link>
        <Link href="/profile/favorite">
          <a className="profileModal_child">내 스크랩</a>
        </Link>
        <Link href="/profile/setting">
          <a className="profileModal_child">설정</a>
        </Link>
        <div className="profileModal_child">로그아웃</div>
      </div>
    </StyledProfileModal>
  );
};

export default ProfileModal;

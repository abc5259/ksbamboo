import Link from "next/link";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { useSetRecoilState } from "recoil";
import { logoutAPI } from "../../../apis/user";
import { showProfileModalAtom } from "../../../atom/atoms";
import { StyledProfileModal } from "./ProfileModalStyles";

export interface IProfileModalProps {}

const ProfileModal = (props: IProfileModalProps) => {
  const setShowProfileModal = useSetRecoilState(showProfileModalAtom);
  const router = useRouter();
  const queryClient = useQueryClient();
  const onClickLogOut = () => {
    logoutAPI().then(() => {
      queryClient.removeQueries("user");
      window.localStorage.removeItem("isLogin");
      setShowProfileModal(prev => !prev);
      router.push("/login");
    });
  };
  return (
    <StyledProfileModal>
      <div className="profileModal">
        <Link href="/profile/write">
          <a
            onClick={() => setShowProfileModal(prev => !prev)}
            className="profileModal_child"
          >
            내가 쓴글
          </a>
        </Link>
        <Link href="/profile/comment">
          <a
            onClick={() => setShowProfileModal(prev => !prev)}
            className="profileModal_child"
          >
            댓글 단 글
          </a>
        </Link>
        <Link href="/profile/favorite">
          <a
            onClick={() => setShowProfileModal(prev => !prev)}
            className="profileModal_child"
          >
            내 스크랩
          </a>
        </Link>
        <Link href="/profile/setting">
          <a
            onClick={() => setShowProfileModal(prev => !prev)}
            className="profileModal_child"
          >
            설정
          </a>
        </Link>
        <div onClick={onClickLogOut} className="profileModal_child">
          로그아웃
        </div>
      </div>
    </StyledProfileModal>
  );
};

export default ProfileModal;

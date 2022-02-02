import Link from "next/link";
import Atom from "../../atoms";
import { StyledEmailAuth } from "./EmailAuthStyles";

export interface IModuleEmailAuthProps {
  email: string;
}

const EmailAuth = ({ email }: IModuleEmailAuthProps) => {
  return (
    <StyledEmailAuth>
      <Atom.Title mb="30px" fontSize="24px">
        이메일 인증
      </Atom.Title>
      <Atom.Title>{email}으로 보내드린</Atom.Title>
      <Atom.Title mb="30px">인증메일을 확인해 주세요.</Atom.Title>
      <Link href="https://apps.ks.ac.kr/ptl/sso/login.jsp">
        <a>
          <Atom.Button width="100%" className="big" color="inherit">
            이메일 확인하러 경성포탈 가기
          </Atom.Button>
        </a>
      </Link>
    </StyledEmailAuth>
  );
};

export default EmailAuth;

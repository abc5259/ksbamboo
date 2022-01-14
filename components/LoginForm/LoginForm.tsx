import Link from "next/link";
import {
  Button,
  Form,
  Input,
  LoginContainer,
  Register,
  Title,
} from "./LoginFormStyles";

const LoginForm = () => {
  return (
    <LoginContainer>
      <Title>KSB</Title>
      <Form>
        <Input type="email" placeholder="이메일" />
        <Input type="password" placeholder="비밀번호" />
        <Button>로그인</Button>
        <Register>
          <span>KSB가 처음이신가요?</span>
          <Link href="/join">회원가입</Link>
        </Register>
      </Form>
    </LoginContainer>
  );
};

export default LoginForm;

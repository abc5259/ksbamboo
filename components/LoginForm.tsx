import styled from "styled-components";
import Link from "next/link";

const LoginContainer = styled.div`
  min-width: 250px;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;
const Title = styled.h1`
  font-size: 22px;
  margin-bottom: 8px;
`;
const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
`;
const Input = styled.input.attrs({ require: true })`
  width: 100%;
  font-size: 18px;
  padding: 10px 5px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  border: none;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: 10px;
  font-size: 18px;
  background-color: ${props => props.theme.accentColor};
  cursor: pointer;
`;

const Register = styled.p`
  margin-top: 20px;
  text-align: center;
  span {
    margin-right: 10px;
  }
  a {
    color: ${props => props.theme.accentColor};
  }
`;

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

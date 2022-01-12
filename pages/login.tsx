import type { NextPage } from "next";
import AppLayout from "../components/AppLayout";
import LoginForm from "../components/LoginForm";

const Login: NextPage = () => {
  return (
    <>
      <AppLayout>
        <LoginForm />
      </AppLayout>
    </>
  );
};
//good

export default Login;

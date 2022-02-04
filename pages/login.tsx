import type { NextPage } from "next";
import AppLayout from "../components/templates/AppLayout";
import LoginForm from "../components/organisms/LoginForm/LoginForm";

const Login: NextPage = () => {
  return (
    <>
      <AppLayout>
        <LoginForm />
      </AppLayout>
    </>
  );
};
export default Login;

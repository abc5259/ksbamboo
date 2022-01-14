import type { NextPage } from "next";
import AppLayout from "../components/AppLayout";
import JoinForm from "../components/JoinForm/JoinForm";

const Join: NextPage = () => {
  return (
    <>
      <AppLayout>
        <JoinForm />
      </AppLayout>
    </>
  );
};

export default Join;

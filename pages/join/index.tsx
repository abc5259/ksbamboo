import type { NextPage } from "next";
import AppLayout from "../../components/templates/AppLayout";
import JoinForm from "../../components/organisms/JoinForm/JoinForm";

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

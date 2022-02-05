import { useRouter } from "next/router";
import EmailAuth from "../../components/organisms/EmailAuth/EmailAuth";
import HeaderLayout from "../../components/layouts/HeaderLayout/HeaderLayout";

const Email = () => {
  const { query } = useRouter();
  return (
    <HeaderLayout>
      <EmailAuth email={`${query.email}`} />
    </HeaderLayout>
  );
};

export default Email;

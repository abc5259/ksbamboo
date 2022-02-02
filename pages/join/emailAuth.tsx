import AppLayout from "../../components/templates/AppLayout";
import { useRouter } from "next/router";
import EmailAuth from "../../components/organisms/EmailAuth/EmailAuth";

const Email = () => {
  const { query } = useRouter();
  return (
    <AppLayout>
      <EmailAuth email={`${query.email}`} />
    </AppLayout>
  );
};

export default Email;

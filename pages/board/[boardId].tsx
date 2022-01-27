import { useRouter } from "next/router";
import AppLayout from "../../components/AppLayout";
import Button from "../../components/button";

const BoardPage = () => {
  const router = useRouter();
  const { boardId } = router.query;
  return (
    <AppLayout>
      <Button>daw</Button>
    </AppLayout>
  );
};
export default BoardPage;

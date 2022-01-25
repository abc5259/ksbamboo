import { useRouter } from "next/router";
import AppLayout from "../../components/AppLayout";

const BoardPage = () => {
  const router = useRouter();
  const { boardId } = router.query;
  return <AppLayout>{boardId}</AppLayout>;
};
export default BoardPage;

import { useRouter } from "next/router";
import HeaderLayout from "../../components/layouts/HeaderLayout/HeaderLayout";

const BoardPage = () => {
  const router = useRouter();
  const { boardId } = router.query;
  return <HeaderLayout>{boardId}</HeaderLayout>;
};
export default BoardPage;

import { useRouter } from "next/router";
import HeaderAndSideBar from "../../components/layouts/HeaderAndSideBar/HeaderAndSideBar";

const BoardPage = () => {
  const router = useRouter();
  const { boardId } = router.query;
  return <HeaderAndSideBar>{boardId}</HeaderAndSideBar>;
};
export default BoardPage;

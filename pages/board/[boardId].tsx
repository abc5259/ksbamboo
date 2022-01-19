import { useRouter } from "next/router";

const BoardPage = () => {
  const router = useRouter();
  const { boardId } = router.query;
  return <div>{boardId}</div>;
};
export default BoardPage;

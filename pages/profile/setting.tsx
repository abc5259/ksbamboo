import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getUserAPI } from "../../apis/user";
import HeaderLayout from "../../components/layouts/HeaderLayout/HeaderLayout";
import User from "../../interfaces/user";

const Setting = () => {
  const router = useRouter();
  const { isLoading, data: me } = useQuery<User | boolean, AxiosError>(
    "user",
    getUserAPI
  );
  if (!isLoading) {
    if (!me) {
      router.push("/login");
    }
  }
  return <HeaderLayout>setting</HeaderLayout>;
};

export default Setting;

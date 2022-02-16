import axios from "axios";
import jwt_decode from "jwt-decode";
import { QueryClient } from "react-query";

export default function reissueExpToken(
  token: string,
  refreshToken: string,
  setToken: React.Dispatch<React.SetStateAction<string>>,
  queryClient?: QueryClient
) {
  const decode: { email: string; iat: number; exp: number } = jwt_decode(token);
  const currentTime = Math.floor(new Date().getTime() / 1000);
  const dif = new Date((decode.exp - currentTime) * 1000);
  //만료시간이 30초이하이면 재발급
  if (dif.getTime() < 30000) {
    axios
      .post(`http://localhost:3050/auth/refresh`, {
        refresh_token: refreshToken,
      })
      .then(response => {
        localStorage.removeItem("accessToken");
        localStorage.setItem("accessToken", response.data?.accessToken);
        setToken(response.data?.accessToken);
        queryClient?.refetchQueries("user");
      })
      .catch(error => {
        console.log(error);
        // localStorage.clear();
        if (error?.response?.data.statusCode === 401) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          queryClient?.removeQueries("user");
        }
      });
  }
}

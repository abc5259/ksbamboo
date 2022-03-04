import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { theme } from "../styles/theme";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../utils/baseUrl";
import { useEffect, useState } from "react";
import reissueExpToken from "../utils/reissueExpToken";

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL = BASE_URL;
  axios.defaults.withCredentials = true;
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>KsBamboo</title>
      </Head>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
            <ToastContainer />
            <ReactQueryDevtools initialIsOpen={true} />
          </ThemeProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default App;

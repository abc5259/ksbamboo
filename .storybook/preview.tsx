import React from "react";
import { ThemeProvider } from "styled-components";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { theme } from "../styles/theme";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "../styles/global-style";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const decorators = [
  Story => (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Story />
          </ThemeProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  ),
];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

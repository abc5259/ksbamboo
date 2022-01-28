import React from "react";
import { ThemeProvider } from "styled-components";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { theme } from "../styles/theme";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "../styles/global-style";

export const decorators = [
  Story => (
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      </RecoilRoot>
    </>
  ),
];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
};

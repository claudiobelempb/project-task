import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/global-styles";
import { ThemeProvider } from "styled-components";

import dark from "../styles/themes/dark";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={dark}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}
export default MyApp;

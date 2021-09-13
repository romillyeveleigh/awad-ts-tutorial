import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

// The Component prop is the active page,
// so whenever you navigate between routes,
// Component will change to the new page.
// Therefore, any props you send to Component
// will be received by the page.

// pageProps is an object with the initial props
// that were preloaded for your page by one of
// our data fetching methods, otherwise it's an
// empty object.

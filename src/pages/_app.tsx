// pages/_app.tsx
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import theme from "../theme";
import MainLayout from "./layout";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

/**
 *
 * @param {AppProps} props
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SessionProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </SessionProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;

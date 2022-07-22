import { ChakraProvider, theme } from "@chakra-ui/react";
import { Portfolio } from "./containers";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Portfolio />
  </ChakraProvider>
);

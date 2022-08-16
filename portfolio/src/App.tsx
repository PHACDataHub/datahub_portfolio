import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Portfolio } from "./containers";
import { ProjectPageContainer } from "./containers/ProjectPage";
import { useEffect } from "react";

const theme = extendTheme({
  colors: {
    tag: {
      100: "rgba(82, 227, 225, 0.4)",
      200: "rgba(160, 228, 38, 0.4)",
      300: "rgba(252, 240, 71, 0.5)",
      400: "rgba(216, 131, 255, 0.5)",
      500: "rgba(50, 163, 195, 0.5)",
      600: "rgba(221, 0, 129, 0.4)",
      700: "rgba(245, 93, 0, 0.4)",
      800: "rgba(233, 168, 0, 0.4)",
      900: "rgba(0, 135, 107, 0.4)",
      1000: "rgba(0, 120, 223, 0.4)",
      1100: "rgba(103, 36, 222, 0.4)",
      1200: "rgba(255, 0, 26, 0.4)",
    },
  },
});

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const App = () => (
  <ChakraProvider theme={theme}>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/project/:id" element={<ProjectPageContainer />} />
    </Routes>
  </ChakraProvider>
);

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Portfolio } from './containers';
import { ProjectPageContainer } from './containers/ProjectPage';
import { useEffect } from 'react';

const theme = extendTheme({
  colors: {
    brand: {
      bluegreenlight: 'rgba(82, 227, 225, 0.4)',
      greenlight: 'rgba(160, 228, 38, 0.4)',
      yellowlight: 'rgba(252, 240, 71, 0.5)',
      pink: 'rgba(216, 131, 255, 0.5)',
      bluegreendark: 'rgba(50, 163, 195, 0.5)',
      turquoise: 'rgba(221, 0, 129, 0.4)',
      orange: 'rgba(245, 93, 0, 0.4)',
      yellowdark: 'rgba(233, 168, 0, 0.4)',
      greendark: 'rgba(0, 135, 107, 0.4)',
      blue: 'rgba(0, 120, 223, 0.4)',
      purple: 'rgba(103, 36, 222, 0.4)',
      red: 'rgba(255, 0, 26, 0.4)',
      canada: '#e82042'
    }
  },
  components: {
    Link: {
      baseStyle: {
        color: 'black',
        _hover: {
          color: 'brand.canada'
        },
        textDecor: 'underline',
        fontWeight: 'semibold'
      }
    }
  }
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
      <Route path="/project/:id" element={<ProjectPageContainer />} />
      <Route path="/" element={<Portfolio />} />
    </Routes>
  </ChakraProvider>
);

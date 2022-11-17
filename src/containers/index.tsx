import { Center, Divider, Heading, Stack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Footer } from '../components/organisms/Footer';
import { Header } from '../components/organisms/Header';
import { OtherUsefulTools } from '../components/organisms/OtherUsefulTools';
import ProductPortfolio from '../components/organisms/ProductPortfolio';
import { ProjectPortfolio } from '../components/organisms/ProjectPortfolio';
import { ToolInventory } from '../components/organisms/ToolInventory';
import { getScroll, saveScroll } from '../utils/stateSaver';

export function Portfolio(): JSX.Element {
  useEffect(() => {
    const scroll = getScroll();
    if (scroll) window.scrollTo(0, scroll);
  }, []);

  useEffect(() => {
    const save = () => saveScroll(window.scrollY);
    document.addEventListener('scroll', save);
    return () => document.removeEventListener('scroll', save);
  }, []);

  return (
    <Stack w="100%">
      <Header />
      <Center>
        <Heading size="xl" mt={6}>
          Portfolio
        </Heading>
      </Center>
      <ProductPortfolio />
      <Center>
        <Divider w="80%" />
      </Center>
      <ProjectPortfolio />
      <ToolInventory />
      <OtherUsefulTools />
      <Footer />
    </Stack>
  );
}

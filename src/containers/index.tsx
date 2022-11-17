import { Center, Divider, Heading, Stack } from '@chakra-ui/react';
import { Footer } from '../components/organisms/Footer';
import { Header } from '../components/organisms/Header';
import { OtherUsefulTools } from '../components/organisms/OtherUsefulTools';
import ProductPortfolio from '../components/organisms/ProductPortfolio';
import { ProjectPortfolio } from '../components/organisms/ProjectPortfolio';
import { ToolInventory } from '../components/organisms/ToolInventory';

export function Portfolio(): JSX.Element {
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

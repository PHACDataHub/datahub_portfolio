import { Center, Divider, Heading, Stack } from "@chakra-ui/react";
import { Footer } from "../components/organisms/Footer";
import { Header } from "../components/organisms/Header";
import { OtherUsefulTools } from "../components/organisms/OtherUsefulTools";
import ProductPortfolio from "../components/organisms/ProductPortfolio";
import { ProjectPortfolio } from "../components/ProjectPortfolio";
import { ToolInventory } from "../components/organisms/ToolInventory";

export function Portfolio(): JSX.Element {
  return (
    <Stack w="100%">
      <Header />
      <Center>
        <Heading size="2xl" mt={10}>
          Portfolio
        </Heading>
      </Center>
      <ProjectPortfolio />
      <Center>
        <Divider w="80%" />
      </Center>
      <ProductPortfolio />
      <ToolInventory />
      <OtherUsefulTools />
      <Footer />
    </Stack>
  );
}

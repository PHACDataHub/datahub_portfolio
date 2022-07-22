import { Stack } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { OtherUsefulTools } from "../components/OtherUsefulTools";
import { ToolInventory } from "../components/ToolInventory";

export function Portfolio(): JSX.Element {
  return (
    <Stack w="100%">
      <Header />
      <ToolInventory />
      <OtherUsefulTools />
      <Footer />
    </Stack>
  );
}

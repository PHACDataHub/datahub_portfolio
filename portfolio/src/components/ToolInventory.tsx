import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  HStack,
  Link,
  Stack,
  Tag,
  Image,
  Text,
} from "@chakra-ui/react";
import { toolInventoryList } from "../utils/data/constants";
import { InventoryTool } from "../utils/types";

const ToolCard = ({ tool }: { tool: InventoryTool }) => {
  return (
    <Box
      p={6}
      maxW={"330px"}
      w={"full"}
      boxShadow={"2xl"}
      rounded={"lg"}
      pos={"relative"}
      zIndex={1}
    >
      <Stack>
        {/* <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Brand
          </Text> */}
        {tool.image && (
          <Image position="absolute" maxW="40px" right="5" src={tool.image} />
        )}
        <HStack>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {tool.name}
          </Heading>
          {tool.url && (
            <Link href={tool.url} target="_blank">
              <ExternalLinkIcon boxSize="18" />
            </Link>
          )}
        </HStack>
        <HStack>
          <Text>Protected B Data:</Text>
          <Tag bgColor={tool.protected_b_data ? "green.200" : "red.200"}>
            {tool.protected_b_data ? "Yes" : "No"}
          </Tag>
        </HStack>
        <HStack>
          <Text>Self Hosted Version:</Text>
          <Tag bgColor={tool.self_hosted_version ? "green.200" : "red.200"}>
            {tool.self_hosted_version ? "Yes" : "No"}
          </Tag>
        </HStack>
      </Stack>
    </Box>
  );
};

export function ToolInventory(): JSX.Element {
  return (
    <Stack
      bgColor="rgb(235,236,237)"
      display="flex"
      flexDir="column"
      alignItems="center"
      p={8}
    >
      <Heading>Tool Inventory</Heading>
      <Heading size="md" fontWeight="normal">
        The collection of tools below are used by our team and our partners for
        various projects
      </Heading>
      <Box
        py={8}
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        gap={5}
        maxW="90%"
      >
        {toolInventoryList.map((tool) => (
          <ToolCard tool={tool} />
        ))}
      </Box>
    </Stack>
  );
}

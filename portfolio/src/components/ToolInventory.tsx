import {
  ChevronDownIcon,
  ChevronUpIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Heading,
  HStack,
  Link,
  Stack,
  Tag,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { teams, toolInventoryList, categories, projects } from "../utils/data/constants";
import { InventoryTool } from "../utils/types";

const ToolCard = ({ tool }: { tool: InventoryTool }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box
      maxW={"280px"}
      w={"full"}
      boxShadow={"xl"}
      rounded={"lg"}
      pos={"relative"}
      zIndex={1}
    >
      <Stack>
        {/* <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Brand
          </Text> */}
        <Box px={4} pt={4}>
          {tool.image && (
            <Image position="absolute" maxW="40px" right="5" src={tool.image} />
          )}
          <Heading
            maxW="80%"
            fontSize={"2xl"}
            fontFamily={"body"}
            fontWeight={500}
          >
            {tool.name}{" "}
            {tool.url && (
              <Link href={tool.url} target="_blank">
                <ExternalLinkIcon boxSize="18" />
              </Link>
            )}
          </Heading>
          <Box pt={7} pb={2} display="flex" flexWrap="wrap" gap={1}>
            {tool.categories.map((category) => (
              <Tag
                key={category}
                fontSize="smaller"
                bgColor={
                  categories.find((tool) => tool.name === category)?.color ??
                  "blue.300"
                }
              >
                {category}
              </Tag>
            ))}
          </Box>
        </Box>
        <Button
          borderY="lightgray solid 1px"
          borderTopRadius={0}
          borderBottomRadius={isOpen ? 0 : "lg"}
          variant="ghost"
          w="100%"
          rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Less' : 'More'} Details
        </Button>
        <Stack
          px={4}
          pb={6}
          display={isOpen ? "block" : "none"}
        >
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
          <HStack>
            <Text>Cost:</Text>
            <Text
              fontWeight="500"
              fontSize="sm"
              py={1}
              px={2}
              borderRadius="lg"
              bgColor="blue.200"
            >
              {tool.cost}
            </Text>
          </HStack>
          {tool.teams.length > 0 && (
            <>
              <Text>Teams using it:</Text>
              <Box display="flex" flexWrap="wrap" gap={3}>
                {tool.teams.map((team) => (
                  <Text
                    fontWeight="500"
                    fontSize="sm"
                    px={2}
                    py={1}
                    borderRadius="lg"
                    bgColor={
                      teams.find((teamObj) => teamObj.name === team)?.color ??
                      "blue.200"
                    }
                  >
                    {team}
                  </Text>
                ))}
              </Box>
            </>
          )}
          {tool.projects.length > 0 && (
            <>
              <Text>Projects using it:</Text>
              <Box display="flex" flexWrap="wrap" gap={3}>
                {tool.projects.map((project) => (
                  <Text
                    fontWeight="500"
                    fontSize="sm"
                    px={2}
                    py={1}
                    borderRadius="lg"
                    bgColor={
                      projects.find((projectObj) => projectObj.name === project)?.color ??
                      "blue.200"
                    }
                  >
                    {project}
                  </Text>
                ))}
              </Box>
            </>
          )}
        </Stack>
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
        alignItems="flex-start"
        flexWrap="wrap"
        gap={8}
        maxW="90%"
      >
        {toolInventoryList.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </Box>
    </Stack>
  );
}

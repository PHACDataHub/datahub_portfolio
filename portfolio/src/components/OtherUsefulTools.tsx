import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { useSmallScreen } from "../utils/hooks";
import { otherUsefulToolsList } from "../utils/data/constants";

export function OtherUsefulTools(): JSX.Element {
  const isSmallScreen = useSmallScreen();
  return (
    <Box
      px={5}
      py={10}
      display="flex"
      flexDir="column"
      alignItems="center"
      w="100%"
    >
      <Heading>Other Useful Tools</Heading>
      <Text my={4}>
        Additional developer-focused tools that our team finds useful
      </Text>
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        gap={4}
        maxW="90%"
      >
        {otherUsefulToolsList.map((tool) => (
          <Box
            w={isSmallScreen ? "45%" : "30%"}
            key={tool.name}
            textAlign="center"
          >
            <Link href={tool.url} target="_blank">
              <Heading size="md">{tool.name}</Heading>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

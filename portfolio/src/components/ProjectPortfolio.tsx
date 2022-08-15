import { Box, Heading, Text } from "@chakra-ui/react";

export function ProjectPortfolio(): JSX.Element {
  return (
    <Box
      px={5}
      py={10}
      display="flex"
      flexDir="column"
      alignItems="center"
      w="100%"
    >
      <Heading>Project Portfolio</Heading>
      <Text my={4}>
        Additional developer-focused tools that our team finds useful
      </Text>
    </Box>
  );
}

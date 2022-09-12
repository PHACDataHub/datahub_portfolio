import { Box, Heading, Stack } from '@chakra-ui/react';
import { toolInventoryList } from '../../utils/constants';
import ToolCard from '../molecules/ToolCard';

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

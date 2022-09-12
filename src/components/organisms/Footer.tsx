import { HStack, Link, Text, VStack } from '@chakra-ui/react';
import { useSmallScreen } from '../../utils/hooks';

export function Footer(): JSX.Element {
  const isSmallScreen = useSmallScreen();
  return (
    <VStack bgColor="rgb(235,236,237)" textAlign="center" py={10} spacing={8}>
      <Text fontSize="lg" fontWeight="medium">
        Please contact the Data Analytics team if you have questions about any
        of the projects, or if you are interested in partnering on a new project
      </Text>
      <HStack
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={5}
        spacing={isSmallScreen ? 0 : 20}
      >
        <Link
          href="https://github.com/PHACDataHub"
          target="_blank"
          fontSize="lg"
        >
          GitHub Project Repository
        </Link>
        <Link
          fontSize="lg"
          href="https://phacdatahub.github.io/datahub/"
          target="_blank"
        >
          PHAC Data Strategy
        </Link>
      </HStack>
    </VStack>
  );
}

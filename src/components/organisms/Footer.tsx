import { ExternalLinkIcon } from '@chakra-ui/icons';
import { HStack, Link, Text, VStack } from '@chakra-ui/react';
import { useSmallScreen } from '../../utils/hooks';

export function Footer(): JSX.Element {
  const isSmallScreen = useSmallScreen();
  return (
    <VStack bgColor="rgb(235,236,237)" textAlign="center" py={10} spacing={6}>
      <Text fontSize="lg" fontWeight="medium">
        Please contact the Data Science team if you have questions about any of
        the projects, or if you are interested in partnering on a new project
      </Text>
      <HStack
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={5}
        spacing={isSmallScreen ? 0 : 20}
      >
        <Link href="https://github.com/PHACDataHub" isExternal fontSize="lg">
          GitHub Project Repository
          <ExternalLinkIcon mx="2px" />
        </Link>
        <Link
          fontSize="lg"
          href="https://olivercrosby.github.io/datahub/"
          isExternal
        >
          PHAC Data Strategy
          <ExternalLinkIcon mx="2px" />
        </Link>
      </HStack>
      <HStack w="100%" align="space-between">
        <Text fontSize="lg" fontWeight="medium" color="blackAlpha.800" w="full">
          © 2021-2023 Public Health Agency of Canada.
        </Text>
        <Text fontSize="lg" fontWeight="medium" color="blackAlpha.800" w="full">
          Developed by Eduardo Szeckir
        </Text>
      </HStack>
    </VStack>
  );
}

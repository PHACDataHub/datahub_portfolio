import { Stack, Heading, Image } from '@chakra-ui/react';
import { useSmallScreen } from '../../utils/hooks';

export function Header(): JSX.Element {
  const isSmallScreen = useSmallScreen();

  return (
    <Stack p={5} bgColor="rgb(235, 236, 237)">
      <Stack
        margin="auto"
        spacing={8}
        w={isSmallScreen ? '80%' : '70%'}
        py={10}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/8/84/PHAC_wordmark.svg"
          alt=""
          objectFit="contain"
          w="100%"
          maxW="400px"
        />
        <Heading size="lg" fontWeight="medium">
          The Data Analytics team partners with program areas to develop
          innovative solutions for some of the most pressing data challenges
          across the Agency
        </Heading>
      </Stack>
    </Stack>
  );
}

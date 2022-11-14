import { Box, Heading, Image, Spacer, Text, VStack } from '@chakra-ui/react';
import { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectPage } from '../../utils/types';

export function ProjectCard({ project }: { project: ProjectPage }) {
  const { id, name, cardImage, description } = project;

  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate(`/project/${id}`, { replace: true }),
    [navigate]
  );

  const cardImg = useRef<HTMLImageElement>(null);

  return (
    <Box
      display="flex"
      flexDir="column"
      maxW={280}
      minW={240}
      flex={1}
      backgroundColor="gray.100"
      borderBottomRadius="xl"
      transition="all 0.2s ease-in-out"
      _hover={{
        boxShadow: '2xl'
      }}
      onMouseEnter={() => {
        if (cardImg.current) {
          cardImg.current.style.transform = 'scale(1.1)';
        }
      }}
      onMouseLeave={() => {
        if (cardImg.current) {
          cardImg.current.style.transform = 'scale(1)';
        }
      }}
      boxShadow="lg"
      onClick={handleOnClick}
      cursor="pointer"
      position="relative"
    >
      {/* IDEA 1 - TAG ON IMAGE */}
      {/* <Box
        bgColor={status === 'active' ? 'green.400' : 'red.400'}
        borderRadius="lg"
        position="absolute"
        zIndex={2}
        p={2}
        top={2}
        right={2}
      >
        <Heading color="white" size="xs">
          {status === 'active' ? 'Active' : 'Closed'}
        </Heading>
      </Box> */}

      <Box overflow="hidden">
        <Image
          src={process.env.PUBLIC_URL + '/images/' + cardImage}
          ref={cardImg}
          transition="all 0.2s ease-in-out"
        />
      </Box>
      <VStack p={4} flexGrow={1} align="start">
        {/* IDEA 2 - TAG ON CARD */}
        {/* <Box
          bgColor={status === 'active' ? 'green.400' : 'red.400'}
          borderRadius="lg"
          p={2}
        >
          <Heading color="white" fontSize={14}>
            {status === 'active' ? 'Active' : 'Closed'}
          </Heading>
        </Box> */}
        <Heading size="md">{name}</Heading>
        <Spacer />
        <Text size="sm">{description}</Text>
      </VStack>
    </Box>
  );
}

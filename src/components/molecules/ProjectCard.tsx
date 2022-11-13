import { Box, Heading, Image, Spacer, Text, VStack } from '@chakra-ui/react';
import { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectPage } from '../../utils/types';

export function ProjectCard({ project }: { project: ProjectPage }) {
  const { name, cardImage, description } = project;

  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate(`/project/${project.id}`, { replace: true }),
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
    >
      <Box overflow="hidden">
        <Image
          src={process.env.PUBLIC_URL + '/images/' + cardImage}
          transform="scale(1)"
          _hover={{
            transform: 'scale(1.08)'
          }}
          ref={cardImg}
          transition="all 0.2s ease-in-out"
        />
      </Box>
      <VStack p={4} flexGrow={1} align="start">
        <Heading size="md">{name}</Heading>
        <Spacer />
        <Text size="sm">{description}</Text>
      </VStack>
    </Box>
  );
}

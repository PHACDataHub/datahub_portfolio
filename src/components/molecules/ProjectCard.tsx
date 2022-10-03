import { Box, Heading, Image, Spacer, Text, VStack } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectPage } from '../../utils/types';

export function ProjectCard({ project }: { project: ProjectPage }) {
  const [isHovered, setIsHovered] = useState(false);

  const { name, cardImage, description } = project;

  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate(`/project/${project.id}`, { replace: true }),
    [navigate]
  );

  return (
    <Box
      display="flex"
      flexDir="column"
      maxW={300}
      backgroundColor="gray.100"
      borderBottomRadius="xl"
      transition="all 0.2s ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      boxShadow={isHovered ? '2xl' : 'lg'}
      onClick={handleOnClick}
      cursor="pointer"
    >
      <Box overflow="hidden">
        <Image
          src={process.env.PUBLIC_URL + '/images/' + cardImage}
          transform={isHovered ? 'scale(1.08)' : 'scale(1)'}
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

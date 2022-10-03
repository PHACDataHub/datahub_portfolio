import { Box, Heading } from '@chakra-ui/react';
import { projectPageList } from '../../data/projectPages';
import { ProjectCard } from '../molecules/ProjectCard';

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
      <Heading>Projects</Heading>
      <Box
        py={8}
        display="flex"
        justifyContent="center"
        alignItems="stretch"
        // alignItems="flex-start"
        flexWrap="wrap"
        gap={8}
        maxW="90%"
      >
        {projectPageList.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </Box>
    </Box>
  );
}

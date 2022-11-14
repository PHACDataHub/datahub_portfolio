import { Box, Heading } from '@chakra-ui/react';
import { projectPageList } from '../../data/projectPages';
import { useSmallScreen } from '../../utils/hooks';
import { ProjectCard } from '../molecules/ProjectCard';

export function ProjectPortfolio(): JSX.Element {
  const isSmallScreen = useSmallScreen();
  return (
    <Box
      px={5}
      py={5}
      display="flex"
      flexDir="column"
      alignItems="center"
      w="100%"
    >
      <Heading fontSize={isSmallScreen ? 20 : 24}> Current Projects</Heading>
      <Box
        py={8}
        display="flex"
        justifyContent="center"
        alignItems="stretch"
        // alignItems="flex-start"
        flexWrap="wrap"
        gap={8}
        w={isSmallScreen ? '98%' : '80%'}
      >
        {projectPageList.map(
          (project) =>
            project.status === 'active' && (
              <ProjectCard project={project} key={project.id} />
            )
        )}
      </Box>
      <Heading fontSize={isSmallScreen ? 20 : 24}> Closed Projects</Heading>
      <Box
        py={8}
        display="flex"
        justifyContent="center"
        alignItems="stretch"
        // alignItems="flex-start"
        flexWrap="wrap"
        gap={8}
        w={isSmallScreen ? '98%' : '80%'}
      >
        {projectPageList.map(
          (project) =>
            project.status === 'closed' && (
              <ProjectCard project={project} key={project.id} />
            )
        )}
      </Box>
    </Box>
  );
}

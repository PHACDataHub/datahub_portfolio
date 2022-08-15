import { Box, Heading } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { projectPages } from "../utils/data/constants";
import { ProjectPage } from "../utils/types";

const ProjectCard = ({ project }: { project: ProjectPage }) => {
  let { name } = project;
  return <Heading>{name}</Heading>;
};

export function ProjectPortfolio(): JSX.Element {
  let { id } = useParams();
  return (
    <Box
      px={5}
      py={10}
      display="flex"
      flexDir="column"
      alignItems="center"
      w="100%"
    >
      <Heading>Project Portfolio {id}</Heading>
      <Box
        py={8}
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        flexWrap="wrap"
        gap={8}
        maxW="90%"
      >
        {projectPages.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </Box>
    </Box>
  );
}

import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projectPages } from "../utils/data/constants";
import { ProjectPage } from "../utils/types";

const ProjectCard = ({ project }: { project: ProjectPage }) => {
  const [isHovered, setIsHovered] = useState(false);

  let { name, cardImage, description } = project;
  return (
    <Box
      maxW="sm"
      h="initial"
      backgroundColor="gray.100"
      borderBottomRadius="xl"
      boxSizing="border-box"
      transition="all 0.2s ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      boxShadow={isHovered ? "2xl" : "lg"}
    >
      <Box overflow="hidden">
        <Image
          src={process.env.PUBLIC_URL + "images/" + cardImage}
          transform={isHovered ? "scale(1.2)" : "scale(1)"}
          transition="all 0.2s ease-in-out"
        />
      </Box>
      <Box p={5}>
        <Heading size="md">{name}</Heading>
        <Text size="sm">{description}</Text>
      </Box>
    </Box>
  );
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

import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ProjectPage } from "../../utils/types";

export function ProjectCard({ project }: { project: ProjectPage }) {
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
          transform={isHovered ? "scale(1.08)" : "scale(1)"}
          transition="all 0.2s ease-in-out"
        />
      </Box>
      <Box p={5}>
        <Heading size="md">{name}</Heading>
        <Text size="sm">{description}</Text>
      </Box>
    </Box>
  );
}

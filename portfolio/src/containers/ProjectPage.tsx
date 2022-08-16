import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { projectPages } from "../utils/data/constants";
import { useSmallScreen } from "../utils/hooks";
import { ProjectPage } from "../utils/types";

const getSomeRandomColors = (count: number): any[] => {
  const colors = [
    "tag.100",
    "tag.200",
    "tag.300",
    "tag.400",
    "tag.500",
    "tag.600",
    "tag.700",
    "tag.800",
    "tag.900",
    "tag.1000",
    "tag.1100",
    "tag.1200",
  ];
  return colors.sort(() => 0.5 - Math.random()).slice(0, count);
};

const ProjectDetails = ({ project }: { project: ProjectPage }) => {
  let {
    name,
    background,
    problem,
    goal,
    solution,
    images,
    tools,
    successMetrics,
    cardImage,
  } = project;
  const isSmallScreen = useSmallScreen();

  const titleStyle = {
    bgColor: "gray.100",
    w: "100%",
    p: 3,
    borderRadius: "xl",
  };

  let colors = getSomeRandomColors(
    tools.length + (successMetrics ? successMetrics.length : 0)
  );
  let metricColors = getSomeRandomColors(
    successMetrics ? successMetrics.length : 0
  );

  return (
    <>
      <Image
        h="100px"
        w="100%"
        objectFit="cover"
        src={process.env.PUBLIC_URL + "/images/" + cardImage}
      />
      <VStack p={isSmallScreen ? 4 : 10} spacing={8}>
        <Box w="100%">
          <Link to="/">
            <Button size="lg">Back</Button>
          </Link>
        </Box>
        <Heading>{name}</Heading>
        <HStack>
          {tools.map((tool, idx) => (
            <Tag
              key={idx}
              size="lg"
              bgColor={colors[idx]}
              fontWeight="bold"
              fontSize="xl"
            >
              {tool}
            </Tag>
          ))}
        </HStack>
        <Center {...titleStyle}>
          <Heading size="lg">Background</Heading>
        </Center>
        {background.map((paragraph, idx) => (
          <Text key={idx}>{paragraph}</Text>
        ))}
        <Stack direction={isSmallScreen ? "column" : "row"} spacing={8}>
          <VStack w={isSmallScreen ? "100%" : "33%"}>
            <Center {...titleStyle}>
              <Heading size="lg">Problem</Heading>
            </Center>
            <Text>{problem}</Text>
          </VStack>
          <VStack w={isSmallScreen ? "100%" : "33%"}>
            <Center {...titleStyle}>
              <Heading size="lg">Goal</Heading>
            </Center>
            <Text>{goal}</Text>
          </VStack>
          <VStack w={isSmallScreen ? "100%" : "33%"}>
            <Center {...titleStyle}>
              <Heading size="lg">Solution</Heading>
            </Center>
            <Text>{solution}</Text>
          </VStack>
        </Stack>
        {successMetrics && (
          <>
            <Center {...titleStyle}>
              <Heading size="lg">Success Metrics</Heading>
            </Center>
            {successMetrics.map((metric, idx) => (
              <Tag
                key={idx}
                fontWeight="bold"
                bgColor={metricColors[idx]}
                size="lg"
                fontSize="xl"
              >
                {metric}
              </Tag>
            ))}
          </>
        )}
        {images.map((image, idx) => (
          <Image key={idx} src={process.env.PUBLIC_URL + "/images/" + image} />
        ))}
      </VStack>
    </>
  );
};

export function ProjectPageContainer(): JSX.Element {
  let { id } = useParams();

  let project = projectPages.find((project) => project.id === id);

  return project ? (
    <ProjectDetails project={project} />
  ) : (
    <>
      <VStack pt={10}>
        <Link to="/">
          <Button>Home</Button>
        </Link>

        <Center h="60vh">
          <VStack>
            <Heading>No Project Found</Heading>
          </VStack>
        </Center>
      </VStack>
    </>
  );
}

import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
  VStack
} from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import { projectPageList } from '../data/projectPages';
import { useRandomColors, useSmallScreen } from '../utils/hooks';
import { ProjectPage } from '../utils/types';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { ImageCarousel } from '../components/molecules/ImageCarousel';
import TagList from '../components/molecules/TagList';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const ProjectDetails = ({ project }: { project: ProjectPage }) => {
  const {
    name,
    background,
    problem,
    goal,
    solution,
    images,
    tools,
    successMetrics,
    cardImage,
    importantLink
  } = project;
  const isSmallScreen = useSmallScreen();

  const titleStyle = {
    bgColor: 'rgb(244, 247, 250)',
    w: '100%',
    p: 3,
    borderRadius: 'xl'
  };

  const metricColors = useRandomColors(
    successMetrics ? successMetrics.length : 0
  );

  return (
    <>
      <Image
        h={isSmallScreen ? '80px' : '120px'}
        w="100%"
        objectFit="cover"
        src={process.env.PUBLIC_URL + '/images/' + cardImage}
        transition="all 0.5s ease"
      />
      <Box
        w="100%"
        p={isSmallScreen ? 4 : 6}
        position={isSmallScreen ? 'relative' : 'absolute'}
      >
        <Link to="/">
          <Button size="lg" px={4} py={1}>
            Back
          </Button>
        </Link>
      </Box>
      <VStack
        spacing={6}
        w={isSmallScreen ? '95%' : '70%'}
        m="auto"
        mb={8}
        mt={isSmallScreen ? 0 : 12}
      >
        <Heading fontSize={32} textAlign="center">
          {name}
        </Heading>
        {importantLink && (
          <a target="_blank" href={importantLink.url}>
            <HStack
              backgroundColor="gray.200"
              py={2}
              px={3}
              borderRadius="md"
              transition="all 0.2s ease-in-out"
              _hover={{
                backgroundColor: 'gray.300'
              }}
            >
              <Heading size="sm">{importantLink.label}</Heading>
              <ExternalLinkIcon fontSize="md" />
            </HStack>
          </a>
        )}
        <TagList tags={tools} />
        {background && (
          <>
            <Center {...titleStyle}>
              <Heading fontSize={22}>Background</Heading>
            </Center>
            {background.map((paragraph, idx) => (
              <Text alignSelf="start" key={idx}>
                {paragraph}
              </Text>
            ))}
          </>
        )}
        <Stack direction={isSmallScreen ? 'column' : 'row'} spacing={8}>
          {problem && (
            <VStack flexGrow={1} flexBasis={0}>
              <Center {...titleStyle}>
                <Heading fontSize={22}>Problem</Heading>
              </Center>
              {problem.map((paragraph, idx) => (
                <>
                  <Text key={idx}>{paragraph}</Text>
                  {idx !== problem.length - 1 && <Divider />}
                </>
              ))}
            </VStack>
          )}
          {goal && (
            <VStack flexGrow={1} flexBasis={0}>
              <Center {...titleStyle}>
                <Heading fontSize={22}>Goal</Heading>
              </Center>
              {goal.map((paragraph, idx) => (
                <>
                  <Text key={idx}>{paragraph}</Text>
                  {idx !== goal.length - 1 && <Divider />}
                </>
              ))}
            </VStack>
          )}
          {solution && (
            <VStack flexGrow={1} flexBasis={0}>
              <Center {...titleStyle}>
                <Heading fontSize={22}>Solution</Heading>
              </Center>
              {solution.map((paragraph, idx) => (
                <>
                  <Text key={idx}>{paragraph}</Text>
                  {idx !== solution.length - 1 && <Divider />}
                </>
              ))}
            </VStack>
          )}
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
        {images.length > 1 ? (
          <ImageCarousel images={images} />
        ) : images.length > 0 ? (
          <Image src={process.env.PUBLIC_URL + '/images/' + images[0]} />
        ) : null}
      </VStack>
    </>
  );
};

export function ProjectPageContainer(): JSX.Element {
  const { id } = useParams();

  const project = projectPageList.find((project) => project.id === id);

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

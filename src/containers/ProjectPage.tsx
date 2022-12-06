import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import { projectPageList } from '../data/projectPages';
import { useRandomColors } from '../utils/hooks';
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

  const metricColors = useRandomColors(
    successMetrics ? successMetrics.length : 0
  );

  const imagesPresent = images && images.length > 0;

  return (
    <Box>
      <Box position="relative" overflow="hidden">
        <Box
          bgImage={process.env.PUBLIC_URL + '/images/' + cardImage}
          bgSize="cover"
          bgPosition="center"
          h="100%"
          w="100%"
          position="absolute"
          zIndex={-1}
          filter="blur(5px) brightness(0.75)"
        />
        <VStack align="start" spacing={5} p={[4, 6, 8]}>
          <HStack w="100%">
            <Link to="/">
              <Button size={['sm', 'md', 'lg']} px={4} py={1}>
                Back
              </Button>
            </Link>
            <Spacer />
            {importantLink && (
              <Button
                as="a"
                href={importantLink.url}
                target="blank"
                leftIcon={<ExternalLinkIcon />}
                size={['sm', 'md', 'lg']}
                px={4}
                py={1}
              >
                {importantLink.label}
              </Button>
            )}
          </HStack>
          <Heading
            bgColor="blackAlpha.600"
            fontSize={['2xl', '3xl', '4xl']}
            py={2}
            px={4}
            borderRadius="xl"
            color="white"
          >
            {name}
          </Heading>
          <Stack w="100%" direction={['column', 'column', 'row']}>
            <TagList tags={tools} textColor="white" />
          </Stack>
        </VStack>
      </Box>
      <HStack p={[4, 6, 8]} align="start">
        <VStack w="100%" px={[0, 2, 4, 6, 8]}>
          {background && (
            <Heading size="lg" alignSelf={imagesPresent ? 'start' : 'center'}>
              Background
            </Heading>
          )}
          {background?.map((paragraph, idx) => (
            <Text alignSelf="start" key={idx}>
              {paragraph}
            </Text>
          ))}
          {background && <Divider my={2} />}
          {problem && (
            <Heading size="lg" alignSelf={imagesPresent ? 'start' : 'center'}>
              Problem
            </Heading>
          )}
          {problem?.map((paragraph, idx) => (
            <Text alignSelf="start" key={idx}>
              {paragraph}
            </Text>
          ))}
          {problem && <Divider />}
          {goal && (
            <Heading size="lg" alignSelf={imagesPresent ? 'start' : 'center'}>
              Goal
            </Heading>
          )}
          {goal?.map((paragraph, idx) => (
            <Text alignSelf="start" key={idx}>
              {paragraph}
            </Text>
          ))}
          {goal && <Divider />}
          {solution && (
            <Heading size="lg" alignSelf={imagesPresent ? 'start' : 'center'}>
              Solution
            </Heading>
          )}
          {solution?.map((paragraph, idx) => (
            <Text alignSelf="start" key={idx}>
              {paragraph}
            </Text>
          ))}
          {solution && <Divider />}
          {successMetrics && (
            <Heading size="lg" alignSelf={imagesPresent ? 'start' : 'center'}>
              Success Metrics
            </Heading>
          )}
          {successMetrics?.map((metric, idx) => (
            <HStack key={idx} w="100%" align="start">
              <Center
                w="1rem"
                h="1rem"
                borderRadius="full"
                bgColor={metricColors[idx]}
              />
              <Text alignSelf="start">{metric}</Text>
            </HStack>
          ))}
        </VStack>
        {imagesPresent && images.length > 1 ? (
          <Box p={2} w={'50%'}>
            <ImageCarousel images={images} />
          </Box>
        ) : images.length > 0 ? (
          <Image
            src={process.env.PUBLIC_URL + '/images/' + images[0]}
            w="50%"
          />
        ) : null}
      </HStack>
    </Box>
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

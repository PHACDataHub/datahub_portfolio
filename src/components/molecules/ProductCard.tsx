import {
  Box,
  Center,
  Heading,
  Stack,
  Image,
  useDisclosure,
  Button
} from '@chakra-ui/react';
import { useState } from 'react';
import { Product } from '../../utils/types';
import ProductModal from './ProductModal';

export default function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { name, cardImage, slogan, color, comingSoon } = product;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        px={5}
        maxW={320}
        minW={250}
        flex={1}
        display="flex"
        flexDir="column"
        alignItems="center"
        position="relative"
      >
        <Center pb={12}>
          <Box
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            cursor="pointer"
            onClick={onOpen}
            p={6}
            boxShadow={'2xl'}
            rounded={'lg'}
          >
            <Box
              rounded={'lg'}
              mt={-16}
              pos={'relative'}
              _after={{
                transition: 'all .2s ease-in-out',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 0,
                left: 0,
                backgroundImage: `url(${cardImage})`,
                backgroundSize: 'cover',
                filter: 'blur(30px)',
                zIndex: -1
              }}
            >
              <Image
                rounded={'lg'}
                boxSize={36}
                transition="all .3s ease-in-out"
                transform={isHovered ? 'scale(1.15)' : 'scale(1)'}
                mx="auto"
                objectFit="cover"
                src={cardImage}
              />
            </Box>
            <Stack pt={4} align={'center'} spacing={5}>
              <Heading fontSize={'4xl'} fontFamily={'body'} fontWeight={700}>
                {name}
              </Heading>
              {comingSoon && (
                <Box
                  bgColor="brand.canada"
                  color="white"
                  py={1}
                  px={2}
                  borderRadius="md"
                >
                  <Heading size="xs">COMING SOON</Heading>
                </Box>
              )}
              <Heading fontSize={'xl'} textAlign="center" fontWeight={400}>
                {slogan}
              </Heading>
              <Button color={color} variant="link">
                Click to learn more
              </Button>
            </Stack>
          </Box>
        </Center>
      </Box>
      <ProductModal isOpen={isOpen} onClose={onClose} product={product} />
    </>
  );
}

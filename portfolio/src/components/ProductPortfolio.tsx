import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Stack,
  Image,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { products } from "../utils/data/constants";
import { Product } from "../utils/types";

const ProductCard = ({ product }: { product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { name, cardImage, slogan } = product;
  return (
    <Box px={5} display="flex" flexDir="column" alignItems="center">
      <Center pb={12}>
        <Box
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          cursor="pointer"
          role={"group"}
          p={6}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            _after={{
              transition: "all .2s ease-in-out",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 0,
              left: 0,
              backgroundImage: `url(${cardImage})`,
              backgroundSize: "cover",
              filter: "blur(30px)",
              zIndex: -1,
            }}
            // _groupHover={{
            //   _after: {
            //     filter: "blur(35px)",
            //   },
            // }}
          >
            <Image
              rounded={"lg"}
              boxSize={36}
              transition="all .3s ease-in-out"
              transform={isHovered ? "scale(1.15)" : "scale(1)"}
              mx="auto"
              objectFit="contain"
              src={cardImage}
            />
          </Box>
          <Stack pt={4} align={"center"} spacing={5}>
            {/* <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              Brand
            </Text> */}
            <Heading fontSize={"4xl"} fontFamily={"body"} fontWeight={700}>
              {name}
            </Heading>
            <Heading fontSize={"xl"} fontWeight={400}>
              {slogan}
            </Heading>
          </Stack>
        </Box>
      </Center>
    </Box>
  );
};

export default function ProductPortfolio() {
  return (
    <VStack spacing={16}>
      <Heading mt={10}>Products</Heading>
      <HStack wrap="wrap">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </HStack>
    </VStack>
  );
}

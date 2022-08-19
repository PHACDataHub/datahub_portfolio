import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Image,
  HStack,
  Heading,
  VStack,
  Divider,
  Box,
} from "@chakra-ui/react";
import { Product } from "../../utils/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function ProductModal({
  isOpen,
  onClose,
  product,
}: {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}) {
  const { name, description, cardImage, images, url } = product;
  return (
    <Modal size="5xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <HStack>
            <Image maxH="2em" src={cardImage} />
            <Heading>{name}</Heading>
          </HStack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Button
            as="a"
            target="_blank"
            href={url}
            rightIcon={<ExternalLinkIcon />}
            mb={3}
          >
            Visit the website
          </Button>
          <VStack>
            {description.map((paragraph) => (
              <>
                <Text fontSize="lg">{paragraph}</Text>
                <Divider />
              </>
            ))}
          </VStack>
          <Box>
            <Swiper
              loop
              autoplay={{
                delay: 2000,
              }}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, Pagination]}
            >
              {images.map((image) => (
                <SwiperSlide>
                  <Image
                    p={10}
                    src={process.env.PUBLIC_URL + "images/" + image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button bgColor="brand.canada" color="white" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

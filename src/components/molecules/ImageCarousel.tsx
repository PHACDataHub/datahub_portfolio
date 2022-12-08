import { Box, Image } from '@chakra-ui/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export function ImageCarousel({ images }: { images: string[] }) {
  return (
    <Box w="100%">
      <Swiper
        loop
        autoplay={false}
        navigation={true}
        pagination={{
          clickable: true
        }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <Image
              mx="auto"
              p={10}
              src={process.env.PUBLIC_URL + '/images/' + image}
              minH="500px"
              maxH="80vh"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

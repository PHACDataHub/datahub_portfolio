import { Box, Image } from '@chakra-ui/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export function ImageCarousel({ images }: { images: string[] }) {
  return (
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
        <SwiperSlide
          key={idx}
          style={{
            backgroundColor: 'green'
          }}
        >
          {/* <Box
            bgImage={process.env.PUBLIC_URL + '/images/' + image}
            bgSize="contain"
            bgPosition="center"
            bgRepeat={'no-repeat'}
            minH={300}
            maxH={720}
            flex={1}
            w="100%"
          /> */}
          <Image
            src={process.env.PUBLIC_URL + '/images/' + image}
            objectFit="contain"
            maxH={500}
            w="100%"
            p={6}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

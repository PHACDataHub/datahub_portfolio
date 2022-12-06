import { Image } from '@chakra-ui/react';
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
        <SwiperSlide key={idx}>
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

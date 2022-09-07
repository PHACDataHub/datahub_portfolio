import { Box, Image } from "@chakra-ui/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export function ImageCarousel({ images }: { images: string[] }) {
  return (
    <Box w="100%">
      <Swiper
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <Image p={10} src={process.env.PUBLIC_URL + "/images/" + image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

"use client";

import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import Container from "../shared/Container";
import SwiperSlider from "../shared/SwiperSlider";

const ProjectSlider = () => {
  const images = [
    { id: 1, imgUrl: "/assets/hero-images/hero-image-1.jpg" },
    { id: 2, imgUrl: "/assets/hero-images/hero-image-2.jpg" },
    { id: 3, imgUrl: "/assets/hero-images/hero-image-3.jpg" },
    { id: 4, imgUrl: "/assets/hero-images/hero-image-4.jpg" },
    { id: 5, imgUrl: "/assets/hero-images/hero-image-5.jpg" },
    { id: 6, imgUrl: "/assets/hero-images/hero-image-6.jpg" },
    { id: 7, imgUrl: "/assets/hero-images/hero-image-7.jpg" },
    { id: 8, imgUrl: "/assets/hero-images/hero-image-8.jpg" },
    { id: 9, imgUrl: "/assets/hero-images/hero-image-9.jpg" },
    { id: 10, imgUrl: "/assets/hero-images/hero-image-10.jpg" },
  ];

  return (
    <Container>
      <SwiperSlider>
        {images.map((image: any) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.imgUrl}
              alt={image.id.toString()}
              width={300}
              height={300}
              priority
              className="h-[300px] w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </SwiperSlider>
    </Container>
  );
};

export default ProjectSlider;

"use client";

// import "swiper/css";
// import "swiper/css/pagination";
import { EffectFade, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/scss/scrollbar";
import Image from "next/image";
import "./slider.style.scss";

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

const ScrollBarSlider = () => {
  return (
    <div className="container mx-auto">
      <div className="my-10">
        <div className="blog-slider">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              el: ".blog-slider__pagination",
              clickable: true,
            }}
            className="blog-slider__wrp !overflow-visible"
            modules={[Pagination, Navigation, Mousewheel, EffectFade]}
            effect="fade"
            loop={true}
            mousewheel={{
              invert: false,
            }}
          >
            {images.map((image: any, index: number) => (
              <SwiperSlide key={index} className="blog-slider__item">
                <div className="blog-slider__img">
                  <Image
                    src={image.imgUrl}
                    alt=""
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="blog-slider__content">
                  <span className="blog-slider__code">26 December 2019</span>
                  <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                  <div className="blog-slider__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae voluptate repellendus magni illo ea animi?
                  </div>
                  <a href="#" className="blog-slider__button">
                    READ MORE
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="blog-slider__pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollBarSlider;

"use client";

import { Swiper } from "swiper/react";

import React, { FC, ReactNode, useCallback, useRef, useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import {
  Autoplay,
  EffectFade,
  Grid,
  Mousewheel,
  Navigation,
  Pagination,
  Parallax,
} from "swiper/modules";

interface ISwiperSlider {
  children: ReactNode;
  swiperProps?: any;
  [key: string]: any;
  className?: string;
  isShowBtn?: boolean;
}

const SwiperSlider: FC<ISwiperSlider> = ({
  swiperProps,
  children,
  className = "",
  isShowBtn = true,
}) => {
  const sliderRef = useRef<any>();
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(false);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const handleSlideChange = (swiper: any) => {
    setIsEnd(swiper.isEnd);
    setIsBeginning(swiper.isBeginning);
  };

  return (
    <React.Fragment>
      <div className="relative">
        <Swiper
          ref={sliderRef}
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 3,
            },
          }}
          loopAddBlankSlides={true}
          // grid={{
          //   fill: "row",
          //   rows: 2
          // }}
          // parallax={{
          //   enabled: true
          // }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          // centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          // navigation={true}
          // navigation={{
          //   hideOnClick: false,
          // }}
          modules={[
            Autoplay,
            Pagination,
            Navigation,
            Grid,
            Parallax,
            Mousewheel,
            EffectFade,
          ]}
          {...swiperProps}
          // className="relative"
          className={`${className}`}
          onSwiper={(swiper) => {
            setIsEnd(swiper.isEnd);
            setIsBeginning(swiper.isBeginning);
          }}
        >
          {children}
        </Swiper>

        {isShowBtn && (
          <>
            {!isBeginning && (
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform rounded-l-md bg-gray-800 px-4 py-2 text-white"
              >
                <FaLongArrowAltLeft />
              </button>
            )}

            {!isEnd && (
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform rounded-r-md bg-gray-800 px-4 py-2 text-white"
              >
                <FaLongArrowAltRight />
              </button>
            )}
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default SwiperSlider;

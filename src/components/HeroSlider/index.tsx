"use client";

import { useEffect, useState } from "react";

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
  { id: 10, imgUrl: "/assets/hero-images/hero-image-10.jpg" }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="relative">
        <div className="slider-container">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`slide ${index === current ? "active" : ""}`}
              style={{
                backgroundImage: `url(${image.imgUrl})`
              }}
            >
              <div className="bg-overlay"></div>
            </div>
          ))}
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center z-10">
          <h1>Slide</h1>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;

"use client";

import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const videos = [
  "/videos/after-enter-button.mp4",
  "/videos/slidervideo2.mp4",
  "/videos/slidervideo3.mp4",
];

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer bg-black/40 hover:bg-black/60 rounded-full p-2"
      onClick={onClick}
    >
      <ChevronRight className="h-6 w-6 text-white" />
    </div>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer bg-black/40 hover:bg-black/60 rounded-full p-2"
      onClick={onClick}
    >
      <ChevronLeft className="h-6 w-6 text-white" />
    </div>
  );
}

const Hero: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000, // 5 seconds delay between slides
    speed: 1000, // 1 second fade transition duration
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          position: "absolute",
          bottom: "25px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul className="flex space-x-3">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-white/70 hover:bg-white transition-all duration-300" />
    ),
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Slider {...settings} className="relative">
        {videos.map((src, index) => (
          <div key={index} className="relative">
            <video
              className="w-full h-screen object-cover"
              src={src}
              autoPlay
              loop
              muted
              playsInline
            />
            {/* Optional dark overlay */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;

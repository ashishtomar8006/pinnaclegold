"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const videos = [
  "/videos/after-enter-button.mp4",
  "/videos/slidervideo2.mp4",
  "/videos/slidervideo3.mp4",
];

// Custom Arrow Components
function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer bg-[#c8ac6e] hover:bg-[#c8ac6e] rounded-full p-3 transition-all duration-300"
      onClick={onClick}
      role="button"
      aria-label="Next slide"
    >
      <ChevronRight className="h-7 w-7 text-white" />
    </div>
  );
}

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer bg-[#c8ac6e] hover:bg-[#c8ac6e] rounded-full p-3 transition-all duration-300"
      onClick={onClick}
      role="button"
      aria-label="Previous slide"
    >
      <ChevronLeft className="h-7 w-7 text-white" />
    </div>
  );
}

const Hero: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true, // ✅ Fixed casing
    autoplaySpeed: 5000, // 5s between auto slides
    speed: 1000, // 1s fade transition
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow onClick={() => sliderRef.current?.slickNext()} />, // ✅ Fixed arrow binding
    prevArrow: <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />, // ✅ Fixed arrow binding
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 20,
        }}
      >
        <ul className="flex space-x-3">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-white/70 hover:bg-white transition-all duration-300" />
    ),
    beforeChange: (current: number, next: number) => {
      // Pause all videos before changing slide
      const videoElements = document.querySelectorAll("video");
      videoElements.forEach((video) => {
        if (!video.paused) video.pause();
      });

      // Play next video after small delay (optional)
      setTimeout(() => {
        const nextVideo = document.querySelector(
          `#hero-video-${next}`
        ) as HTMLVideoElement | null;
        if (nextVideo) {
          nextVideo.play().catch((err) => console.warn("Autoplay failed:", err));
        }
      }, 500);
    },
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Slider {...settings} ref={sliderRef}>
        {videos.map((src, index) => (
          <div key={index} className="relative w-full h-screen">
            <video
              id={`hero-video-${index}`}
              className="w-full h-full object-cover"
              src={src}
              loop
              muted
              playsInline
              disablePictureInPicture
              controls={false}
            >
              Your browser does not support the video tag.
            </video>

            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Optional: Add content like CTA or title here */}
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white text-4xl md:text-6xl font-bold">The Pinnacle</h1>
            </div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
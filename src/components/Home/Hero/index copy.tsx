"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const videos = [
  "/videos/video-the-pinnacle.mp4",
  "/videos/after-enter-button.mp4",
  "/videos/slidervideo2.mp4",
];

const Hero: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  // ✅ Play first video on page load
  useEffect(() => {
    const t = setTimeout(() => {
      const firstVideo = document.querySelector(
        "#hero-video-0"
      ) as HTMLVideoElement | null;

      if (firstVideo) {
        firstVideo.currentTime = 0;
        firstVideo.play().catch((err) => console.warn("Autoplay failed:", err));
      }
    }, 300);

    return () => clearTimeout(t);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: false, // slick slide autoplay (not video autoplay)
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,

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

    beforeChange: (_current: number, next: number) => {
      // Pause all videos before changing slide
      document.querySelectorAll("video").forEach((video) => {
        if (!video.paused) video.pause();
      });

      // Play next slide video
      setTimeout(() => {
        const nextVideo = document.querySelector(
          `#hero-video-${next}`
        ) as HTMLVideoElement | null;

        if (nextVideo) {
          nextVideo.currentTime = 0;
          nextVideo.play().catch((err) => console.warn("Autoplay failed:", err));
        }
      }, 150);
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
              autoPlay={index === 0}   // ✅ helps first slide
              preload="auto"
              controls={false}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;

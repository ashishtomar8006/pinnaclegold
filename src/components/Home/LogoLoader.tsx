"use client";

import { useEffect, useState } from "react";

export default function LogoLoader() {

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black flex items-center justify-center overflow-hidden">
      <video
        src="/videos/logovideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-contain"
      />
     
    </div>
  );
}

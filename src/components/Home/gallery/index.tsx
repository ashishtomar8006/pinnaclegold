"use client"

import { useState } from "react"
import PhotoAlbum, { type Photo } from "react-photo-album"
import Lightbox from "yet-another-react-lightbox"
import "react-photo-album/styles.css"
import "yet-another-react-lightbox/styles.css"

// 10+ photos – mix of portrait/landscape for "small + big" feel
const photos: Photo[] = [
  { src: "/images/hero/banner1.jpg", width: 1600, height: 900 },
  { src: "/images/hero/banner2.jpg", width: 900, height: 1200 },
  { src: "/images/hero/banner3.jpg", width: 1400, height: 900 },
  { src: "/images/hero/banner4.jpg", width: 900, height: 1000 },
  { src: "/images/hero/banner5.jpg", width: 1600, height: 1000 },
  { src: "/images/hero/banner6.jpg", width: 1200, height: 1100 },
  { src: "/images/hero/banner7.jpg", width: 900, height: 700 },
  { src: "/images/hero/banner8.jpg", width: 1600, height: 900 },
//   { src: "/images/hero/banner9.jpg", width: 900, height: 600 },
]

const GallerySection = () => {
  const [index, setIndex] = useState(-1) // for lightbox

  return (
    <section className="!pt-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-4xl font-bold text-[#c8ac6e] leading-tight">Pinnacle Gallery</h1>
        </div>
      <div className="max-w-full mx-auto px-8">
        <PhotoAlbum
          photos={photos}
          layout="masonry"
          columns={(containerWidth) => {
            if (containerWidth < 640) return 1
            if (containerWidth < 1024) return 2
            return 3
          }}
          spacing={12}
          onClick={({ index }) => setIndex(index)}
        />

        <Lightbox open={index >= 0} index={index} close={() => setIndex(-1)} slides={photos} />
      </div>
    </section>
  )
}

export default GallerySection

"use client"

import { useState } from "react"
import PhotoAlbum, { type Photo } from "react-photo-album"
import Lightbox from "yet-another-react-lightbox"
import "react-photo-album/styles.css"
import "yet-another-react-lightbox/styles.css"

// 10+ photos – mix of portrait/landscape for "small + big" feel
const photos: Photo[] = [
  { src: "/images/gallery/galleryimage1.jpeg", width: 1872, height: 3328 },
  { src: "/images/gallery/galleryimage2.jpeg", width: 2100, height: 3736 },
  { src: "/images/gallery/galleryimage3.jpeg", width: 2100, height: 3736 },
  { src: "/images/gallery/galleryimage4.jpeg", width: 2340, height: 4160 },
  { src: "/images/gallery/galleryimage5.jpeg", width: 2100, height: 3736 },
  { src: "/images/gallery/galleryimage6.jpeg", width: 1714, height: 3046 },
  { src: "/images/gallery/galleryimage7.jpeg", width: 2100, height: 3736 },
  { src: "/images/gallery/galleryimage2.jpeg", width: 2100, height: 3736 },
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

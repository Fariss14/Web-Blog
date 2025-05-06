"use client"

import { useState, useEffect, useRef } from "react"
import Lightbox from "yet-another-react-lightbox"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Captions from "yet-another-react-lightbox/plugins/captions"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"
import "yet-another-react-lightbox/plugins/captions.css"
import { LazyImage } from "./LazyImage"
import "./ImageGallery.css"

interface GalleryImage {
  src: string
  alt: string
  title?: string
  description?: string
}

interface ImageGalleryProps {
  images: GalleryImage[]
  title?: string
  columns?: number
  aspectRatio?: "square" | "video" | "portrait" | "auto"
}

export function ImageGallery({
  images,
  title,
  columns = 3,
  aspectRatio = "square",
}: ImageGalleryProps) {
  const [index, setIndex] = useState(-1)
  const [visibleImages, setVisibleImages] = useState<number[]>([])
  const galleryRef = useRef<HTMLDivElement>(null)

  const slides = images.map((image) => ({
    src: image.src,
    alt: image.alt,
    title: image.title || image.alt,
    description: image.description || "",
  }))

  const gridColsClass = `cols-${columns}`

  useEffect(() => {
    const handleScroll = () => {
      if (!galleryRef.current) return

      const rect = galleryRef.current.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0

      if (isVisible) {
        setVisibleImages(Array.from({ length: images.length }, (_, i) => i))
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [images.length])

  return (
    <div className="gallery-container" ref={galleryRef}>
      {title && <h3 className="gallery-title">{title}</h3>}

      <div className={`gallery-grid ${gridColsClass}`}>
        {images.map((image, i) => (
          <LazyImage
            key={i}
            src={image.src}
            alt={image.alt}
            aspectRatio={aspectRatio}
            className={visibleImages.includes(i) ? "visible" : ""}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Thumbnails, Zoom, Fullscreen, Captions]}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80,
          gap: 12,
          border: 2,
          borderRadius: 8,
          padding: 4,
        }}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
        }}
        carousel={{
          finite: false,
          preload: 3,
          padding: 16,
          spacing: 30,
        }}
        animation={{
          swipe: 250,
          fade: 250,
        }}
      />
    </div>
  )
}

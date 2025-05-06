"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useLazyLoad } from "../../hooks/useLazyLoad"
import "./ImageGallery.css"

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  placeholderSrc?: string
  aspectRatio?: "square" | "video" | "portrait" | "auto"
  onClick?: () => void
}

export function LazyImage({
  src,
  alt,
  className = "",
  placeholderSrc,
  aspectRatio = "square",
  onClick,
}: LazyImageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const { ref, imageSrc, imageLoaded, error } = useLazyLoad({
    src,
    placeholderSrc,
    rootMargin: "200px",
  })

  // Set aspect ratio class
  let aspectRatioClass = "aspect-square" // Default
  if (aspectRatio === "video") aspectRatioClass = "aspect-video"
  if (aspectRatio === "portrait") aspectRatioClass = "aspect-portrait"
  if (aspectRatio === "auto") aspectRatioClass = ""

  // Handle visibility for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (containerRef.current) {
            observer.unobserve(containerRef.current)
          }
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`gallery-item lazy-image-container ${aspectRatioClass} ${isVisible ? "visible" : ""} ${className}`}
      onClick={onClick}
    >
      {!imageLoaded && !error && (
        <div className="lazy-image-placeholder">
          <div className="shimmer-effect"></div>
        </div>
      )}
      <div ref={ref as React.RefObject<HTMLDivElement>}>
        {(imageSrc || error) && (
          <img
            src={error ? placeholderSrc : imageSrc}
            alt={alt}
            className={`lazy-image ${imageLoaded ? "loaded" : ""}`}
          />
        )}
      </div>
    </div>
  )
}

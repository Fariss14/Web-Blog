"use client"

import { useState, useEffect } from "react"
import { useIntersectionObserver } from "./useIntersectionObserver"

interface UseLazyLoadProps {
  src: string
  placeholderSrc?: string
  threshold?: number
  rootMargin?: string
}

export function useLazyLoad({
  src,
  placeholderSrc = "/placeholder.svg?height=400&width=600",
  threshold = 0.1,
  rootMargin = "200px",
}: UseLazyLoadProps) {
  const [imageSrc, setImageSrc] = useState(placeholderSrc)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [error, setError] = useState(false)

  const { ref, hasIntersected } = useIntersectionObserver({
    threshold,
    rootMargin,
  })

  useEffect(() => {
    if (!hasIntersected) return

    const img = new Image()
    img.src = src
    img.onload = () => {
      setImageSrc(src)
      setImageLoaded(true)
    }
    img.onerror = () => {
      setError(true)
    }

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src, hasIntersected])

  return { ref, imageSrc, imageLoaded, error }
}

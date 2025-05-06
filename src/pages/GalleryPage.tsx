"use client"

import { useState, useEffect } from "react"
import { Layout } from "../components/layout/Layout"
import { getAllImages } from "../data/tripData"
import "../styles/gallery.css"

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [images, setImages] = useState(getAllImages())
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Get unique locations for filters
  const locations = [...new Set(images.map((img) => img.location))]

  // Filter images based on active filter
  useEffect(() => {
    if (activeFilter) {
      setImages(getAllImages().filter((img) => img.location === activeFilter))
    } else {
      setImages(getAllImages())
    }
  }, [activeFilter])

  return (
    <Layout>
      <div className="gallery-page">
        <div className="container">
          <div className="gallery-header">
            <h1 className="gallery-title">Photo Gallery</h1>
            <div className="gallery-subtitle">Capturing Moments from Our Educational Journey</div>
            <div className="gallery-divider"></div>
          </div>

          <p className="gallery-description">
            Explore photographs from our educational field trip across Manila, Subic Bay, and Baguio City. These images
            document our learning experiences and cultural encounters throughout the journey.
          </p>

          {/* Filter buttons */}
          <div className="gallery-filters">
            <button
              className={`filter-button ${activeFilter === null ? "active" : ""}`}
              onClick={() => setActiveFilter(null)}
            >
              All Locations
            </button>

            {locations.map((location) => (
              <button
                key={location}
                className={`filter-button ${activeFilter === location ? "active" : ""}`}
                onClick={() => setActiveFilter(location)}
              >
                {location}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div key={index} className="gallery-item" onClick={() => setSelectedImage(image.src)}>
                <div className="gallery-item-image">
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} />
                </div>
                <div className="gallery-item-overlay">
                  <div className="gallery-item-info">
                    <span className="gallery-item-day">{image.day === 0 ? "Advance Party" : `Day ${image.day}`}</span>
                    <span className="gallery-item-location">{image.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {selectedImage && (
            <div className="lightbox" onClick={() => setSelectedImage(null)}>
              <div className="lightbox-content">
                <img src={selectedImage || "/placeholder.svg"} alt="Enlarged view" />
                <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
                  ×
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

"use client"

import { useParams, Link, useLocation } from "react-router-dom"
import { MapPin, User, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react"
import { Layout } from "../components/layout/Layout"
import { tripData } from "../data/tripData"
import "../styles/day-detail.css"
import "../styles/newspaper.css"
import { useEffect, useState } from "react"

export default function DayDetailPage() {
  const { dayNumber } = useParams<{ dayNumber: string }>()
  const dayNum = Number.parseInt(dayNumber || "1")
  const location = useLocation()
  const [pageNumber, setPageNumber] = useState(dayNum + 1) // +1 because home is page 1

  const day = tripData.find((d) => d.number === dayNum)
  const prevDay = tripData.find((d) => d.number === dayNum - 1)
  const nextDay = tripData.find((d) => d.number === dayNum + 1)

  // Update page number when location changes
  useEffect(() => {
    if (dayNum >= 0) {
      setPageNumber(dayNum + 1) // +1 because home is page 1
    }
  }, [location, dayNum])

  if (!day) {
    return (
      <Layout>
        <div className="container">
          <div className="day-detail">
            <h1>Day not found</h1>
            <p>Sorry, we couldn't find information for the requested day.</p>
            <Link to="/" className="btn btn-primary">
              Return to Home
            </Link>
          </div>
        </div>
      </Layout>
    )
  }

  const dayTitle = day.isAdvanceParty ? "Advance Party" : `Day ${day.number}`

  return (
    <Layout>
      <div className="day-detail">
        <div className="container">
          {/* Back Button */}
          <Link to="/#days-section" className="back-button">
            <ArrowLeft size={20} />
            <span>Back</span>
          </Link>

          {/* Newspaper Container */}
          <div className="newspaper">
            {/* Newspaper Header */}
            <div className="newspaper-header">
              <div className="newspaper-date">{day.date}</div>
              <h1 className="newspaper-title">BSIT FIELD TRIP CHRONICLE</h1>
              <div className="newspaper-subtitle">Documenting Our Educational Journey</div>
            </div>

            {/* Main Headline */}
            <div className="newspaper-headline">
              <h2 className="headline-text">
                {dayTitle}: {day.title}
              </h2>
              <div className="headline-meta">
                <div className="headline-location">
                  <MapPin size={16} />
                  <span>{day.location}</span>
                </div>
                {day.tourGuide && (
                  <div className="headline-guide">
                    <User size={16} />
                    <span>Tour Guide: {day.tourGuide}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Featured Image */}
            <div className="newspaper-featured-image">
              <img src={day.image || "/placeholder.svg"} alt={`${dayTitle}: ${day.title}`} />
              <div className="image-caption">{`${dayTitle}: ${day.title} - ${day.location}`}</div>
            </div>

            {/* Article Content */}
            <div className="newspaper-content">
              {/* Overview Section */}
              <div className="newspaper-section">
                <h3 className="section-title">Overview</h3>
                <div className="section-content">
                  {/* Render description directly, allowing for any number of paragraphs */}
                  <div dangerouslySetInnerHTML={{ __html: day.description }} />
                </div>
              </div>

              {/* Itineraries Section */}
              <div className="newspaper-section">
                <h3 className="section-title">Day's Itinerary</h3>
                <div className="section-content itineraries-grid">
                  {day.itineraries.map((itinerary, index) => (
                    <div key={index} className="newspaper-itinerary">
                      <h4 className="itinerary-title">{itinerary.title}</h4>
                      <div className="itinerary-image">
                        <img src={itinerary.image || "/placeholder.svg"} alt={itinerary.title} />
                      </div>
                      <p className="itinerary-description">{itinerary.description}</p>

                      {/* Add trivia section if trivia exists */}
                      {itinerary.trivia && (
                        <div className="itinerary-trivia">
                          <div className="trivia-title">
                            <span className="trivia-icon">📝</span>
                            <span>Did You Know?</span>
                          </div>
                          <p>{itinerary.trivia}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Reflection Section */}
              {day.reflection && (
                <div className="newspaper-section reflection-section">
                  <h3 className="section-title">Student Reflection</h3>
                  <div className="section-content">
                    <div className="pull-quote">
                      <p>{day.reflection}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Newspaper Footer */}
            <div className="newspaper-footer">
              <div className="newspaper-navigation">
                {prevDay ? (
                  <Link to={`/day/${prevDay.number}`} className="nav-link prev">
                    <ChevronLeft size={16} />
                    <span>
                      Previous: {prevDay.isAdvanceParty ? "Advance Party" : `Day ${prevDay.number}`} - {prevDay.title}
                    </span>
                  </Link>
                ) : (
                  <div></div>
                )}
                {nextDay ? (
                  <Link to={`/day/${nextDay.number}`} className="nav-link next">
                    <span>
                      Next: {nextDay.isAdvanceParty ? "Advance Party" : `Day ${nextDay.number}`} - {nextDay.title}
                    </span>
                    <ChevronRight size={16} />
                  </Link>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="newspaper-page-number">Page {pageNumber}</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

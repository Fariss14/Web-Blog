"use client"

import { Layout } from "../components/layout/Layout"
import { tripData } from "../data/tripData"
import "../styles/print.css"

export default function PrintPage() {
  return (
    <Layout>
      <div className="print-page">
        <div className="container">
          <div className="print-header">
            <h1 className="print-title">The BSIT Chronicle</h1>
            <div className="print-subtitle">Educational Field Trip Documentation</div>
            <div className="print-meta">
              <div>April 6-14, 2025</div>
              <div>Manila, Subic, Baguio</div>
              <div>BSIT Batch 2024-2025</div>
            </div>
            <div className="print-actions">
              <button onClick={() => window.print()} className="print-button">
                Print This Document
              </button>
            </div>
          </div>

          <div className="print-overview">
            <h2 className="print-section-title">Educational Tour Overview</h2>
            <p className="print-lead">
              The BSIT Educational Field Trip is a comprehensive 9-day journey from Zamboanga City to Manila, Subic Bay,
              and Baguio City, designed to bridge theoretical knowledge with practical applications in the field of
              Information Technology. This immersive experience provides students with firsthand exposure to
              technological infrastructure, industry practices, and cultural contexts that shape the IT landscape in the
              Philippines.
            </p>
            <p>
              Beginning with an advance party arrival in Parañaque on April 6, the tour officially commences on April 7
              with a cultural and historical orientation in Manila. Students explore iconic sites like Intramuros and
              Fort Santiago to understand the country's rich heritage before transitioning to technology-focused visits.
              The second day takes participants to Subic Bay, where they engage with the SBMA Law Enforcement
              Department's Communication Branch and the Seaport Department's Vessel Traffic Management System, gaining
              insights into maritime security technologies and communication protocols essential for port operations.
            </p>
            <p>
              The middle portion of the trip balances educational visits with cultural enrichment. Day 3 features museum
              explorations, while Days 4 and 5 focus on financial technology at Bangko Sentral ng Pilipinas and urban
              transportation systems at the Light Rail Transit Authority and MMDA Traffic Engineering Center. These
              visits demonstrate how information technology integrates with critical infrastructure to address urban
              challenges. Students observe real-time data analytics, automated systems, and network security
              implementations that maintain the functionality of essential services.
            </p>
            <p>
              The journey continues to the cooler climate of Baguio City for Days 6 and 7, where students explore
              cultural attractions like Strawberry Farm, Chinese Bell Church, and the Philippine Military Academy. This
              segment provides a refreshing contrast to Manila's urban environment while still highlighting
              technological applications in tourism, agriculture, and education. Day 7 offers personal time for
              reflection and independent exploration, allowing students to process their experiences and pursue
              individual interests. Throughout the tour, students document their observations, engage with industry
              professionals through Q&A sessions, and participate in group discussions that connect classroom theories
              with practical applications in diverse sectors.
            </p>
          </div>

          <div className="print-days">
            {tripData.map((day, index) => (
              <div key={day.number} className="print-day">
                <div className="page-break"></div>
                <h2 className="print-day-title">
                  {day.isAdvanceParty ? "Advance Party" : `Day ${day.number}`}: {day.title}
                </h2>
                <div className="print-day-meta">
                  <div className="print-day-date">{day.date}</div>
                  <div className="print-day-location">{day.location}</div>
                  {day.tourGuide && <div className="print-day-guide">Tour Guide: {day.tourGuide}</div>}
                </div>

                <div className="print-day-image">
                  <img
                    src={day.image || "/placeholder.svg"}
                    alt={`${day.isAdvanceParty ? "Advance Party" : `Day ${day.number}`}: ${day.title}`}
                  />
                  <div className="print-image-caption">{`${day.isAdvanceParty ? "Advance Party" : `Day ${day.number}`}: ${day.title} - ${day.location}`}</div>
                </div>

                <div className="print-day-description">
                  <p>{day.description}</p>
                </div>

                <h3 className="print-itineraries-title">Itineraries</h3>
                <div className="print-itineraries">
                  {day.itineraries.map((itinerary, idx) => (
                    <div key={idx} className="print-itinerary">
                      <h4 className="print-itinerary-title">{itinerary.title}</h4>
                      <div className="print-itinerary-content">
                        <div className="print-itinerary-image">
                          <img src={itinerary.image || "/placeholder.svg"} alt={itinerary.title} />
                        </div>
                        <div className="print-itinerary-description">
                          <p>{itinerary.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {day.reflection && (
                  <div className="print-reflection">
                    <h3 className="print-reflection-title">Reflection</h3>
                    <blockquote className="print-reflection-content">
                      <p>{day.reflection}</p>
                    </blockquote>
                  </div>
                )}

                <div className="print-page-number">Page {index + 2}</div>
              </div>
            ))}
          </div>

          <div className="print-footer">
            <p>© {new Date().getFullYear()} BSIT Educational Field Trip Chronicle</p>
            <p>Printed from The BSIT Chronicle website</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

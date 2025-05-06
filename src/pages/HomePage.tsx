"use client"
import { Calendar, MapPin, Users, ChevronDown, BookOpen, Clock, Award } from "lucide-react"
import { Layout } from "../components/layout/Layout"
import { DayCard } from "../components/days/DayCard"
import { tripData } from "../data/tripData"
import "../styles/home.css"

export default function HomePage() {
  const scrollToContent = () => {
    const daysSection = document.getElementById("days-section")
    if (daysSection) {
      daysSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Layout>
      {/* Hero Section - Newspaper Front Page */}
      <section className="hero">
        <div className="hero-pattern"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-date">April 6-14, 2025 • Educational Edition</div>
            <div className="hero-headline">
              <h1 className="hero-title">BSIT Educational Field Trip</h1>
              <div className="hero-title-decoration">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p className="hero-subtitle">A Journey of Learning and Discovery</p>
            </div>

            <div className="hero-meta">
              <div className="hero-info-item">
                <Calendar size={20} />
                <span>April 6-14, 2025</span>
              </div>
              <div className="hero-info-item">
                <MapPin size={20} />
                <span>Manila, Subic, Baguio</span>
              </div>
              <div className="hero-info-item">
                <Users size={20} />
                <span>BSIT Students</span>
              </div>
            </div>

            <div className="hero-highlights">
              <div className="highlight-item">
                <Clock className="highlight-icon" />
                <div className="highlight-content">
                  <h3>7 Days</h3>
                  <p>Of Educational Exploration</p>
                </div>
              </div>
              <div className="highlight-item">
                <MapPin className="highlight-icon" />
                <div className="highlight-content">
                  <h3>3 Cities</h3>
                  <p>Manila, Subic, Baguio</p>
                </div>
              </div>
              <div className="highlight-item">
                <BookOpen className="highlight-icon" />
                <div className="highlight-content">
                  <h3>12+ Sites</h3>
                  <p>Educational Destinations</p>
                </div>
              </div>
              <div className="highlight-item">
                <Award className="highlight-icon" />
                <div className="highlight-content">
                  <h3>Immersive</h3>
                  <p>Learning Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator" onClick={scrollToContent}>
          <span>Explore Our Journey</span>
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="container">
          <div className="section-header">
            <div className="section-decoration">
              <span></span>
              <span></span>
            </div>
            <h2 className="section-title">Educational Tour Overview</h2>
            <div className="section-divider"></div>
          </div>
          <div className="overview-card">
            <div className="overview-decoration top-left"></div>
            <div className="overview-decoration top-right"></div>
            <div className="overview-decoration bottom-left"></div>
            <div className="overview-decoration bottom-right"></div>
            <div className="overview-content">
              <p className="lead-paragraph">
                The BSIT Educational Field Trip is a comprehensive 9-day journey from Zamboanga City to Manila, Subic
                Bay, and Baguio City, designed to bridge theoretical knowledge with practical applications in the field
                of Information Technology. This immersive experience provides students with firsthand exposure to
                technological infrastructure, industry practices, and cultural contexts that shape the IT landscape in
                the Philippines.
              </p>
              <div className="overview-columns">
                <p>
                  Beginning with an advance party arrival in Parañaque on April 6, the tour officially commences on
                  April 7 with a cultural and historical orientation in Manila. Students explore iconic sites like
                  Intramuros and Fort Santiago to understand the country's rich heritage before transitioning to
                  technology-focused visits. The second day takes participants to Subic Bay, where they engage with the
                  SBMA Law Enforcement Department's Communication Branch and the Seaport Department's Vessel Traffic
                  Management System, gaining insights into maritime security technologies and communication protocols
                  essential for port operations.
                </p>
                <p>
                  The middle portion of the trip balances educational visits with cultural enrichment. Day 3 features
                  museum explorations, while Days 4 and 5 focus on financial technology at Bangko Sentral ng Pilipinas
                  and urban transportation systems at the Light Rail Transit Authority and MMDA Traffic Engineering
                  Center. These visits demonstrate how information technology integrates with critical infrastructure to
                  address urban challenges. Students observe real-time data analytics, automated systems, and network
                  security implementations that maintain the functionality of essential services.
                </p>
                <p>
                  The journey continues to the cooler climate of Baguio City for Days 6 and 7, where students explore
                  cultural attractions like Strawberry Farm, Chinese Bell Church, and the Philippine Military Academy.
                  This segment provides a refreshing contrast to Manila's urban environment while still highlighting
                  technological applications in tourism, agriculture, and education. Day 7 offers personal time for
                  reflection and independent exploration, allowing students to process their experiences and pursue
                  individual interests. Throughout the tour, students document their observations, engage with industry
                  professionals through Q&A sessions, and participate in group discussions that connect classroom
                  theories with practical applications in diverse sectors.
                </p>
                <p>
                  The educational field trip concludes with a return to Manila on Day 8, where students consolidate
                  their learning through final group activities and documentation before departing for Zamboanga City.
                  This carefully structured itinerary ensures a balanced educational experience that enhances technical
                  knowledge while fostering appreciation for the broader contexts in which information technology
                  operates. By the journey's end, participants gain not only practical insights into IT applications
                  across various sectors but also develop professional networks, teamwork skills, and a deeper
                  understanding of how their academic training prepares them for future careers in the rapidly evolving
                  field of information technology.
                </p>
              </div>
            </div>
          </div>

          <div className="quote-container">
            <blockquote className="overview-quote">
              <p>"Education is not the filling of a pail, but the lighting of a fire."</p>
              <cite>— William Butler Yeats</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Days Section */}
      <section id="days-section" className="days-section">
        <div className="container">
          <div className="section-header">
            <div className="section-decoration">
              <span></span>
              <span></span>
            </div>
            <h2 className="section-title">Our Journey</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Follow our educational adventure day by day</p>
          </div>
          <div className="days-grid">
            {tripData.map((day) => (
              <DayCard key={day.number} day={day} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Explore Our Complete Journey</h2>
            <p className="cta-text">
              Discover detailed accounts of each day's activities, photo galleries, and student reflections.
            </p>
            <div className="cta-buttons">
              <a href="/gallery" className="cta-button primary">
                View Photo Gallery
              </a>
              <a href="/print" className="cta-button secondary">
                Print Version
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

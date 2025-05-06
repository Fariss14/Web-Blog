"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Home, ImageIcon, Calendar, ChevronDown, Printer } from "lucide-react"
import { tripData } from "../../data/tripData"
import "../../styles/layout.css"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDaysDropdownOpen, setIsDaysDropdownOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleDaysDropdown = () => {
    setIsDaysDropdownOpen(!isDaysDropdownOpen)
  }

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <header className="header">
      <div className="header-date-bar">
        <div className="container">
          <div className="header-date">{currentDate}</div>
          <div className="header-edition">Educational Edition</div>
          <Link to="/print" className="print-link">
            <Printer size={16} />
            <span>Print Version</span>
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="masthead">
          <h1 className="newspaper-name">The BSIT Chronicle</h1>
          <div className="newspaper-tagline">Documenting Our Educational Journey</div>
        </div>
      </div>

      <div className="header-nav-bar">
        <div className="container header-container">
          {/* Desktop Navigation */}
          <nav className="nav">
            <Link to="/" className={`nav-item ${location.pathname === "/" ? "active" : ""}`} onClick={closeMenu}>
              <Home size={16} />
              <span>Home</span>
            </Link>

            <div className="nav-dropdown">
              <button
                className={`nav-item dropdown-trigger ${location.pathname.includes("/day/") ? "active" : ""}`}
                onClick={() => setIsDaysDropdownOpen(!isDaysDropdownOpen)}
              >
                <Calendar size={16} />
                <span>Days</span>
                <ChevronDown size={14} className="dropdown-icon" />
              </button>
              <div className={`dropdown-menu ${isDaysDropdownOpen ? "open" : ""}`}>
                {tripData.map((day) => (
                  <Link
                    key={day.number}
                    to={`/day/${day.number}`}
                    className="dropdown-item"
                    onClick={() => {
                      closeMenu()
                      setIsDaysDropdownOpen(false)
                    }}
                  >
                    {day.isAdvanceParty ? "Advance Party" : `Day ${day.number}`}: {day.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/gallery"
              className={`nav-item ${location.pathname === "/gallery" ? "active" : ""}`}
              onClick={closeMenu}
            >
              <ImageIcon size={16} />
              <span>Photo Gallery</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-button" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mobile-nav container">
            <Link to="/" className={`mobile-nav-item ${location.pathname === "/" ? "active" : ""}`} onClick={closeMenu}>
              <Home size={16} />
              <span>Home</span>
            </Link>

            <div className="mobile-dropdown">
              <button
                className={`mobile-nav-item dropdown-trigger ${location.pathname.includes("/day/") ? "active" : ""}`}
                onClick={toggleDaysDropdown}
              >
                <Calendar size={16} />
                <span>Days</span>
                <ChevronDown size={14} className={`dropdown-icon ${isDaysDropdownOpen ? "open" : ""}`} />
              </button>
              {isDaysDropdownOpen && (
                <div className="mobile-dropdown-menu">
                  {tripData.map((day) => (
                    <Link
                      key={day.number}
                      to={`/day/${day.number}`}
                      className="mobile-dropdown-item"
                      onClick={closeMenu}
                    >
                      {day.isAdvanceParty ? "Advance Party" : `Day ${day.number}`}: {day.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/gallery"
              className={`mobile-nav-item ${location.pathname === "/gallery" ? "active" : ""}`}
              onClick={closeMenu}
            >
              <ImageIcon size={16} />
              <span>Photo Gallery</span>
            </Link>

            <Link
              to="/print"
              className={`mobile-nav-item ${location.pathname === "/print" ? "active" : ""}`}
              onClick={closeMenu}
            >
              <Printer size={16} />
              <span>Print Version</span>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

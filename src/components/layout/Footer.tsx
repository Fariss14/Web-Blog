import { Link } from "react-router-dom"
import { Calendar, MapPin, Users, Mail, Phone, Printer } from "lucide-react"
import "../../styles/layout.css"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid footer-centered">
          <div className="footer-section">
            <h3 className="footer-title">The BSIT Chronicle</h3>
            <p className="footer-text">Documenting our educational journey during the BSIT Educational Field Trip.</p>
            <Link to="/print" className="footer-print-link">
              <Printer size={16} />
              <span>Print Version</span>
            </Link>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Trip Information</h3>
            <ul className="footer-list">
              <li className="footer-list-item">
                <Calendar size={20} />
                <span>April 6-14, 2025</span>
              </li>
              <li className="footer-list-item">
                <MapPin size={20} />
                <span>Manila, Subic, Baguio</span>
              </li>
              <li className="footer-list-item">
                <Users size={20} />
                <span>BSIT Batch 2024-2025</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-list">
              <li className="footer-list-item">
                <Mail size={16} />
                <Link to="mailto:bsitfieldtrip@example.com">franzxavldez@gmail.com</Link>
              </li>
              <li className="footer-list-item">
                <Phone size={16} />
                <Link to="tel:+639123456789">+63 912 345 6789</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider">
          <p className="footer-copyright">
            &copy; {currentYear} BSIT Educational Field Trip Chronicle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

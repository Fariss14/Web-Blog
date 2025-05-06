import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DayDetailPage from "./pages/DayDetailPage"
import GalleryPage from "./pages/GalleryPage"
import PrintPage from "./pages/PrintPage"
import "./styles/global.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/day/:dayNumber" element={<DayDetailPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/print" element={<PrintPage />} />
      </Routes>
    </Router>
  )
}

export default App

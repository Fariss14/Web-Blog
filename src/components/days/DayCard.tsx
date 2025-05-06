import { Calendar, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

interface DayCardProps {
  day: {
    number: number
    title: string
    date: string
    location: string
    image: string
    description: string
    isAdvanceParty?: boolean
  }
}

export function DayCard({ day }: DayCardProps) {
  const dayTitle = day.isAdvanceParty ? "Advance Party" : `Day ${day.number}`

  return (
    <Link to={`/day/${day.number}`} className="day-card">
      <div className="day-card-image">
        <img src={day.image || "/placeholder.svg"} alt={`${dayTitle}: ${day.title}`} className="day-card-img" />
        <div className="day-number">{dayTitle}</div>
      </div>
      <div className="day-card-content">
        <h3 className="day-card-title">{day.title}</h3>
        <div className="day-card-info">
          <Calendar className="day-card-icon" />
          <span>{day.date}</span>
        </div>
        <div className="day-card-info">
          <MapPin className="day-card-icon" />
          <span>{day.location}</span>
        </div>
        <p className="day-card-description">{day.description}</p>
        <div className="day-card-read-more">Continue Reading →</div>
      </div>
    </Link>
  )
}

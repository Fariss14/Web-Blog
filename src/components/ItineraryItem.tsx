"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react"
import type { Itinerary } from "../context/TripContext"

interface ItineraryItemProps {
  itinerary: Itinerary & { trivia?: string }
}

const ItineraryItem = ({ itinerary }: ItineraryItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="itinerary-item">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleExpand}>
        <h3 className="text-lg font-semibold">{itinerary.title}</h3>
        <button className="text-gray-500 hover:text-accent transition-colors">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      <div
        className={`mt-4 transition-all duration-300 ${isExpanded ? "opacity-100 max-h-[2000px]" : "opacity-0 max-h-0 overflow-hidden"}`}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img
              src={itinerary.image || "/placeholder.svg"}
              alt={itinerary.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-gray-700">{itinerary.description}</p>

            {itinerary.trivia && (
              <div className="mt-4 bg-surface-light p-4 border-l-4 border-accent rounded-r-sm">
                <div className="flex items-center gap-2 text-accent font-serif font-semibold mb-2">
                  <BookOpen size={18} />
                  <span>Did You Know?</span>
                </div>
                <p className="text-sm italic">{itinerary.trivia}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItineraryItem

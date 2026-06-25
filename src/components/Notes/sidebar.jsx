import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const COLORS = [
  { id: 1, tailwind: 'bg-[#F5C518]', label: 'Yellow' },
  { id: 2, tailwind: 'bg-[#A8D8EA]', label: 'Blue'   },
  { id: 3, tailwind: 'bg-[#FFCF77]', label: 'Orange' },
  { id: 4, tailwind: 'bg-[#C9E4CA]', label: 'Green'  },
]

const Sidebar = ({ onAddNote }) => {
  const [showBubbles, setShowBubbles] = useState(false)

  const handleColorClick = (color) => {
    onAddNote(color)
    setShowBubbles(false)
  }

  return (
    <div className="w-full h-[60px] flex-row md:w-[100px] md:h-full md:flex-col flex items-center md:items-center justify-between md:justify-start px-6 md:px-0 md:py-6 gap-0 md:gap-8 bg-black border-b md:border-b-0 md:border-r border-black/[0.09] shrink-0">
      <Link
        to="/"
        className="text-[18px] md:text-[20px] font-light text-white tracking-tight leading-tight text-center no-underline hover:opacity-70 transition-opacity"
      >
        ZeNotes
      </Link>

      <div className="relative flex flex-row md:flex-col items-center gap-3">
        {showBubbles && (
          <div className="flex flex-row md:flex-col items-center gap-2">
            {COLORS.map((c) => (
              <button
                key={c.id}
                title={c.label}
                onClick={() => handleColorClick(c.tailwind)}
                className={`bubble-btn w-7 h-7 rounded-full ${c.tailwind} border-2 border-white/30 shadow-md hover:scale-110 transition-transform cursor-pointer`}
              />
            ))}
          </div>
        )}

        <button
          onClick={() => setShowBubbles(!showBubbles)}
          className="w-10 h-10 rounded-full bg-white md:bg-black text-black md:text-white flex items-center justify-center hover:opacity-80 transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-95"
        >
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${showBubbles ? 'rotate-45' : 'rotate-0'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
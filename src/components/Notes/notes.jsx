import React, { useState } from 'react'

const Notes = ({ note }) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className={`relative w-[220px] h-[220px] rounded-2xl p-5 flex flex-col justify-between cursor-pointer hover:scale-[1.02] transition-transform duration-200 shadow-sm ${note.color || 'bg-[#F5C518]'}`}>
      {/* Note Content */}
      <div>
        <h3 className="text-sm font-bold text-black leading-snug mb-1">
          {note.title}
        </h3>
        <p className="text-sm text-black/70 leading-relaxed">
          {note.content}
        </p>
      </div>

      {/* Footer: Date + Options */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-black/60">{note.date}</span>

        {/* Three-dot menu button */}
        <div className="relative">
          <button
            onClick={(e) => { e.stopPropagation(); setShowMenu(!showMenu) }}
            className="w-8 h-8 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="5" cy="12" r="1.5" />
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="19" cy="12" r="1.5" />
            </svg>
          </button>

          {/* Dropdown menu */}
          {showMenu && (
            <div className="absolute bottom-10 right-0 bg-white rounded-xl shadow-lg border border-black/[0.08] py-1 min-w-[120px] z-10">
              <button className="w-full text-left px-4 py-2 text-sm text-black hover:bg-black/[0.04] transition-colors">
                Edit
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors">
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Notes

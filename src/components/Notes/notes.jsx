import React, { useState, useEffect, useRef } from 'react'

const Notes = ({ note, isEditing, onSave, onDelete, onEdit }) => {
  const [title, setTitle]     = useState(note.title)
  const [content, setContent] = useState(note.content)
  const [showMenu, setShowMenu] = useState(false)
  const titleRef = useRef(null)

  useEffect(() => {
    if (isEditing && titleRef.current) {
      titleRef.current.focus()
    }
  }, [isEditing])

  useEffect(() => {
    setTitle(note.title)
    setContent(note.content)
  }, [note.title, note.content])

  const handleDone = () => {
    onSave(note.id, title.trim() || 'Untitled', content.trim())
  }

  if (isEditing) {
    return (
      <div className={`relative w-full sm:w-[200px] md:w-[220px] h-[200px] md:h-[220px] rounded-2xl p-5 flex flex-col justify-between shadow-md ${note.color || 'bg-[#F5C518]'}`}>
        <div className="flex flex-col gap-2 flex-1">
          <input
            ref={titleRef}
            type="text"
            placeholder="Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-transparent text-sm font-bold text-black placeholder:text-black/40 outline-none border-b border-black/20 pb-1 w-full"
          />
          <textarea
            placeholder="Write your note..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="bg-transparent text-sm text-black/70 placeholder:text-black/40 outline-none resize-none flex-1 leading-relaxed"
          />
        </div>
        <div className="flex justify-end mt-2">
          <button
            onClick={handleDone}
            className="px-4 py-1.5 bg-black/80 text-white text-xs font-medium rounded-full hover:bg-black transition-colors cursor-pointer active:scale-95"
          >
            Done
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative w-full sm:w-[200px] md:w-[220px] h-[200px] md:h-[220px] rounded-2xl p-5 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200 shadow-sm ${note.color || 'bg-[#F5C518]'}`}>
      <div className="overflow-hidden">
        <h3 className="text-sm font-bold text-black leading-snug mb-1 line-clamp-2">
          {note.title || 'Untitled'}
        </h3>
        <p className="text-sm text-black/70 leading-relaxed line-clamp-4">
          {note.content}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-black/60">{note.date}</span>
        <div className="relative">
          <button
            onClick={(e) => { e.stopPropagation(); setShowMenu(!showMenu) }}
            className="w-8 h-8 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="5"  cy="12" r="1.5" />
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="19" cy="12" r="1.5" />
            </svg>
          </button>

          {showMenu && (
            <div className="absolute bottom-10 right-0 bg-white rounded-xl shadow-lg border border-black/[0.08] py-1 min-w-[120px] z-10">
              <button
                onClick={(e) => { e.stopPropagation(); setShowMenu(false); onEdit(note.id) }}
                className="w-full text-left px-4 py-2 text-sm text-black hover:bg-black/[0.04] transition-colors"
              >
                Edit
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setShowMenu(false); onDelete(note.id) }}
                className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors"
              >
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

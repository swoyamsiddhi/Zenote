import React, { useState, useEffect } from 'react'
import Sidebar from './Notes/sidebar'
import Searchbar from './Notes/searchbar'
import NotesContainer from './Notes/notescontainer'
import video from '../assets/video1.mp4'
import Navbar from './Navbar'

const Notespage = () => {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('zenotes')
    return saved ? JSON.parse(saved) : []
  })
  const [editingNoteId, setEditingNoteId] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    localStorage.setItem('zenotes', JSON.stringify(notes))
  }, [notes])

  const handleAddNote = (color) => {
    const today = new Date()
    const dateString = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`
const newNote = {
      id: Date.now(),
      title: '',
      content: '',
      date: dateString,
      color: color,
      pinned: false,}

    setNotes((prev) => [newNote, ...prev])
    setEditingNoteId(newNote.id)
  }

  const handleSaveNote = (id, title, content) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, title, content } : note
      )
    )
    setEditingNoteId(null)
  }

  const handleEditNote = (id) => {
    setEditingNoteId(id)
  }

  const handleDeleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id))
    if (editingNoteId === id) setEditingNoteId(null)
  }

  return (
    <div className="bg-red-400 min-h-screen w-full overflow-y-auto">
      <Navbar />

      <div className="w-full h-[160px] sm:h-[260px] md:h-[340px] flex flex-row items-center justify-center px-2">
        <span className="text-[8vw] md:text-[160px] text-[#111] tracking-tight font-general-sans leading-none z-0 mr-[-2vw] md:mr-[-8px]">
          Make Y
        </span>
        <div className="z-10 w-[11vw] h-[8vw] md:w-[180px] md:h-[126px] rounded-[200px] overflow-hidden flex-shrink-0">
          <video src={video} autoPlay muted loop playsInline className="w-full h-full object-cover" />
        </div>
        <span className="text-[8vw] md:text-[160px] text-[#111] tracking-tight font-general-sans leading-none z-0 ml-[-2vw] md:ml-[-8px]">
          ur Notes
        </span>
      </div>

      <div className="flex flex-col md:flex-row min-h-[500px] md:h-[680px] rounded-[20px] md:rounded-[40px] mx-3 sm:mx-6 md:mx-10 mb-6 w-[calc(100%-24px)] sm:w-[calc(100%-48px)] md:w-[calc(100%-80px)] max-w-[1380px] xl:mx-auto bg-white overflow-hidden font-general-sans">
        <Sidebar onAddNote={handleAddNote} />

        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="py-4 px-4 md:py-6 md:px-10 border-b border-black/[0.05]">
            <Searchbar value={searchQuery} onChange={setSearchQuery} />
          </div>

          <div className="flex-1 overflow-y-auto px-4 md:px-10 py-6 md:py-8 aww-scroll">
            <NotesContainer
              notes={notes}
              searchQuery={searchQuery}
              editingNoteId={editingNoteId}
              onSave={handleSaveNote}
              onDelete={handleDeleteNote}
              onEdit={handleEditNote}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notespage

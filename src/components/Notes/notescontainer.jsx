import React from 'react'
import Notes from './notes'

const NotesContainer = ({ notes, searchQuery, editingNoteId, onSave, onDelete, onEdit }) => {
  const query = searchQuery.toLowerCase().trim()

  const filteredNotes = query
    ? notes.filter(
        (note) =>
          note.title.toLowerCase().includes(query) ||
          note.content.toLowerCase().includes(query)
      )
    : notes

  const pinnedNotes = filteredNotes.filter((note) => note.pinned === true)
  const otherNotes  = filteredNotes.filter((note) => note.pinned === false)

  return (
    <div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-6 md:mb-8">
        Notes
      </h1>

      {filteredNotes.length === 0 && (
        <p className="text-black/30 text-sm mt-4">
          {query ? `No notes found for "${searchQuery}"` : 'No notes yet. Click + to add one!'}
        </p>
      )}

      {pinnedNotes.length > 0 && (
        <div className="mb-6 md:mb-8">
          <p className="text-xs sm:text-sm text-black/40 mb-3 md:mb-4">Pinned</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 md:flex md:flex-wrap">
            {pinnedNotes.map((note) => (
              <Notes
                key={note.id}
                note={note}
                isEditing={editingNoteId === note.id}
                onSave={onSave}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            ))}
          </div>
        </div>
      )}

      {otherNotes.length > 0 && (
        <div>
          <p className="text-xs sm:text-sm text-black/40 mb-3 md:mb-4">Others</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 md:flex md:flex-wrap">
            {otherNotes.map((note) => (
              <Notes
                key={note.id}
                note={note}
                isEditing={editingNoteId === note.id}
                onSave={onSave}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default NotesContainer

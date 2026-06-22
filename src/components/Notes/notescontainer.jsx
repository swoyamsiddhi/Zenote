import React from 'react'
import Notes from './notes'

const NotesContainer = () => {
  const pinnedNotes = [
    {
      id: 1,
      title: 'What I need to do ?',
      content: 'Time to take some notes!',
      date: '6/21/2026',
      color: 'bg-[#F5C518]',
    }
  ]

  const otherNotes = [
    {
      id: 2,
      title: 'Weekend Groceries List',
      content: 'Fresh berries, whole milk, sourdough bread, avocados, Greek yogurt, coffee beans.',
      date: '6/20/2026',
      color: 'bg-[#A8D8EA]',
    },
    {
      id: 3,
      title: 'App Idea: Fitness Tracker',
      content: 'A minimalist app tracking workouts with simple animations and progress rings.',
      date: '6/18/2026',
      color: 'bg-[#FFCF77]',
    },
    {
      id: 4,
      title: 'React Learning Notes',
      content: 'useState, useEffect, useContext, custom hooks, React Router, component patterns.',
      date: '6/15/2026',
      color: 'bg-[#C9E4CA]',
    }
  ]

  return (
    <div>
      {/* Page Title */}
      <h1 className="text-5xl font-bold text-black tracking-tight mb-8">Notes</h1>

      {/* Pinned Section */}
      <div className="mb-8">
        <p className="text-sm text-black/40 mb-4">Pinned</p>
        <div className="flex flex-wrap gap-5">
          {pinnedNotes.map(note => (
            <Notes key={note.id} note={note} />
          ))}
        </div>
      </div>

      {/* Others Section */}
      <div>
        <p className="text-sm text-black/40 mb-4">Others</p>
        <div className="flex flex-wrap gap-5">
          {otherNotes.map(note => (
            <Notes key={note.id} note={note} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default NotesContainer

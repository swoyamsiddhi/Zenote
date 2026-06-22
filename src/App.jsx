import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Notespage from './components/Notespage'

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notespage />} />
      </Routes>
    </div>
  )
}

export default App
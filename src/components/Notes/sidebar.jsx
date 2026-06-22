import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="w-full h-[60px] flex-row md:w-[100px] md:h-full md:flex-col flex items-center md:items-center justify-between md:justify-start px-6 md:px-0 md:py-6 gap-0 md:gap-8 bg-black border-b md:border-b-0 md:border-r border-black/[0.09] shrink-0">
      <Link to="/" className="text-[20px] font-light text-white tracking-tight leading-tight text-center no-underline hover:opacity-70 transition-opacity">
        ZeNotes
      </Link>

      <button className="w-10 h-10 rounded-full bg-white md:bg-black text-black md:text-white flex items-center justify-center hover:opacity-80 transition-colors cursor-pointer shadow-md hover:shadow-lg active:scale-95">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  )
}

export default Sidebar
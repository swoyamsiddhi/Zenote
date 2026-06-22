import React from 'react'

const Searchbar = () => {
  return (
      <div className="relative max-w-xs">
        {/* Search Icon */}
        <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-black/30">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search by title"
          className="w-full pl-9 pr-4 py-2 text-sm text-black/70 bg-transparent border border-black/[0.12] rounded-lg outline-none focus:border-black/30 transition-colors placeholder:text-black/30"
        />
      </div>
  )
}

export default Searchbar

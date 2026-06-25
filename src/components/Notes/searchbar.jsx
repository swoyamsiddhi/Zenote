import React from 'react'

const Searchbar = ({ value, onChange }) => {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm">
      <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-black/30">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>

      <input
        type="text"
        placeholder="Search by title or content"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-9 pr-8 py-2 text-sm text-black/70 bg-transparent border border-black/[0.12] rounded-lg outline-none focus:border-black/30 transition-colors placeholder:text-black/30"
      />

      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute inset-y-0 right-3 flex items-center text-black/30 hover:text-black/60 transition-colors cursor-pointer"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default Searchbar

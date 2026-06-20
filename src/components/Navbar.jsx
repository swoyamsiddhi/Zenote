import React, { useState } from 'react'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = ['Home', 'Features', 'Notes', 'AboutMe']

  const hrefMap = {
    Home: '#home',
    Features: '#Videocontent',
    Notes: '#notes',
    AboutMe: '#AboutMe'
  }

  return (
    <div className="w-full h-[84px] bg-red-400 border-b border-black/[0.08] sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-12 h-full flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer select-none">
          <span className="text-[25px] font-light text-[#111] tracking-tight font-general-sans">
            ZeNotes
          </span>
        </div>
        <div className="hidden md:flex items-center gap-12">
          {links.map(link => {
            const isNotes = link === 'Notes';
            return (
              <a
                key={link}
                href={hrefMap[link] || '#'}
                className={`text-[18px] text-[#111] tracking-[-0.02em] cursor-pointer transition-all duration-300 font-general-sans ${
                  isNotes 
                    ? 'font-bold animate-bounce hover:opacity-45' 
                    : 'font-light hover:opacity-45'
                }`}>{link}</a>)
          })}
        </div>
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
          onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-5 h-[1.6px] bg-[#111] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.6px]' : ''}`} />
          <span className={`block w-5 h-[1.6px] bg-[#111] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[1.6px] bg-[#111] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.6px]' : ''}`} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#ECECEC] border-b border-black/[0.08] px-8 pb-6 flex flex-col gap-1">
          {links.map(link => {
            const isNotes = link === 'Notes';
            return (
              <a
                key={link}
                href={hrefMap[link] || '#'}
                className={`text-[16px] tracking-[-0.02em] py-3 border-b border-black/[0.06] cursor-pointer transition-all duration-200 font-general-sans ${
                  isNotes 
                    ? 'font-bold animate-bounce text-[#111]' 
                    : 'font-light text-[#111] hover:opacity-45'
                }`}>{link}</a>)})}</div>)}</div>
  )
}
export default Navbar
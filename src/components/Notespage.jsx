import React from 'react'
import Sidebar from './Notes/sidebar'
import Searchbar from './Notes/searchbar'
import NotesContainer from './Notes/notescontainer'
import video from '../assets/video1.mp4'
import Navbar from './Navbar'

const Notespage = () => {
  return (
    <div className='bg-red-400 h-screen w-full overflow-y-auto'>
        <Navbar></Navbar>
     <div className='bg-red-400 w-full h-[200px] sm:h-[300px] md:h-[380px] flex flex-row items-center justify-center px-4'>
        <span className='text-[8vw] md:text-[180px] text-[#111] tracking-tight font-general-sans leading-none z-0 mr-[-2vw] md:mr-[-8px]'>Make Y</span>
        <div className='z-10 w-[11vw] h-[8vw] md:w-[200px] md:h-[140px] rounded-[200px] overflow-hidden flex-shrink-0'>
          <video src={video} autoPlay muted loop playsInline className='w-full h-full object-cover' />
        </div>
        <span className='text-[8vw] md:text-[180px] text-[#111] tracking-tight font-general-sans leading-none z-0 ml-[-2vw] md:ml-[-8px]'>ur Notes</span>
     </div>
    <div className="flex flex-col md:flex-row h-auto md:h-[680px] rounded-[20px] md:rounded-[40px] mx-4 md:mx-10 mb-5 max-w-[1380px] md:w-[calc(100%-80px)] xl:mx-auto bg-white overflow-hidden font-general-sans">

      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden p-4 md:p-0">
        <div className="py-4 md:py-6 md:px-10 border-b border-black/[0.05]">
          <Searchbar />
        </div>

        <div className="flex-1 overflow-y-auto px-4 md:px-10 py-6 md:py-8 aww-scroll">
          <NotesContainer />
        </div>
      </div>
    </div></div>
  )
}

export default Notespage

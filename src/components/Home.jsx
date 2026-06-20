import React from 'react'
import Navbar from './Navbar'
import Videocontent from './Videocontent'
import About from './About'

const Home = () => {
  return ( 
    <div className='bg-red-400 min-h-screen w-screen overflow-x-hidden' id="home">
      <Navbar />
      <div className='w-full flex flex-col md:flex-row p-6 md:p-12 gap-8 md:gap-12 items-stretch justify-between min-h-[550px]'>
        <div className='text-5xl sm:text-7xl md:text-8xl lg:text-[100px] pl-0 md:pl-8 lg:pl-[50px] font-bold flex flex-col text-black leading-[0.85] w-full md:w-1/2 justify-start'>
          <span className=''>Capture.Organise.</span>
          <span className='text-white'>Remember.</span>
          <span className='ml-300 text-3xl text-white font-italic'> By Swoyam. </span>
          <svg className="hidden md:block mt-6" xmlns="http://www.w3.org/2000/svg" fill="none" width="200" height="120" viewBox="0 0 200 120">
            <circle data-reveal-delay="900" cx="60" cy="60" r="59.5" stroke="#191B1D" strokeOpacity=".3" transform="rotate(48 60 60)" data-reveal-old="line" className="" style={{ '--path-length': '540.3038835609332' }}></circle>
            <circle data-reveal-delay="900" cx="140" cy="60" r="59.5" stroke="#191B1D" strokeOpacity=".3" transform="rotate(228 140 60)" data-reveal-old="line" className="" style={{ '--path-length': '540.3038393842221' }}></circle>
            <circle data-reveal-delay="1600" cx="100" cy="60" r="59.5" stroke="#fff" transform="rotate(110 100 60)" data-reveal-old="line" className="" style={{ '--path-length': '490.35353712098936' }}></circle>
            <circle data-reveal-delay="1600" cx="100" cy="60" r="59.5" stroke="#fff" transform="rotate(291 100 60)" data-reveal-old="line" className="" style={{ '--path-length': '494.26939861124237' }}></circle>
          </svg>
        </div>
        <div className='w-full md:w-1/4 flex flex-col justify-end text-left md:text-right pb-10 text-2xl sm:text-3xl md:text-4xl text-black font-light leading-tight'>
          Write ideas, manage tasks and never lose important thoughts.
        </div> 
      </div>
      <Videocontent />
      <About />
    </div>
  )
}

export default Home
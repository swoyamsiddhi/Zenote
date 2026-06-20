import React from 'react'
import Navbar from './Navbar'
import Videocontent from './Videocontent'

const Home = () => {
  return ( 
    <div className='bg-[#EAEAEA] min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <div className='w-full flex p-10 gap-10'>
        <div className='bg-red-500 h-[550px] flex-1 flex items-center justify-center text-white'>left content</div>
        <div className='bg-blue-500 h-[550px] flex-1 flex items-center justify-center text-white'>right content</div> 
      </div>
      <Videocontent />
    </div>
  )
}

export default Home
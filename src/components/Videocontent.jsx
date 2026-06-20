import React from 'react'
import video from '../assets/video.mp4'

const Videocontent = () => {
  return (
    <div className='w-full px-6 md:px-10 pb-6 md:pb-10 h-[320px] sm:h-[450px] md:h-[600px]' id="Videocontent">
      <video 
        src={video} 
        autoPlay
        loop 
        muted 
        playsInline
        className='h-full w-full object-cover rounded-[40px] md:rounded-[100px]'
      />
    </div>
  )
}

export default Videocontent
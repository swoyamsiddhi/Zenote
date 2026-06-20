import React, { useRef, useEffect } from 'react'
import video from '../assets/video.mp4'

const Videocontent = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play().catch(err => console.log('Playback prevented:', err))
        } else {
          videoElement.pause()
        }
      },
      {
        threshold: 0.95 
      }
    )

    observer.observe(videoElement)

    return () => {
      observer.unobserve(videoElement)
    }
  }, [])

  return (
    <div className='w-full px-6 md:px-10 pb-6 md:pb-10 h-[320px] sm:h-[450px] md:h-[600px]'>
      <video 
        ref={videoRef} 
        src={video} 
        loop 
        muted 
        playsInline
        className='h-full w-full object-cover rounded-[40px] md:rounded-[100px]'
      />
    </div>
  )
}

export default Videocontent
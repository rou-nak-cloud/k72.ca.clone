import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video className='h-full w-full object-cover' autoPlay loop playsInline muted
      src="/video.mp4"
      // src="../../../public/video.mp4"
      ></video>
    </div>
  )
}

export default Video
import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font500] text-white pt-5 text-center'>
      <div className='text-[8.5vw] uppercase leading-[8vw]'>L'étincelle</div>
      <div className='text-[8.5vw] flex -mt-1 uppercase leading-[8vw] justify-center items-center'>qui
          <div className='h-[8vw] w-[15vw] rounded-full overflow-hidden'><Video /></div>
        génère</div>
      <div className='text-[8.5vw] uppercase leading-[8vw]'>la créativité</div>
    </div>
  )
}

export default HomeHeroText
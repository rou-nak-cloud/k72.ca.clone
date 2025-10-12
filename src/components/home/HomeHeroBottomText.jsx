import React from 'react'
import { Link } from 'react-router-dom'

const HomeHeroBottomText = () => {
  return (
    <div className='text-white font-[font300] flex items-center justify-center gap-5 mb-2'>
      <Link className='text-[6vw] border-2 border-white/90 rounded-full px-5 pt-2 pb-0 uppercase leading-[5.5vw] hover:text-[#D3FD50]' to='/projects' >Projects</Link>
      <Link className='text-[6vw] border-2 border-white/90 rounded-full px-5 pt-2 pb-0 uppercase leading-[5.5vw] hover:text-[#D3FD50]' to='/agence' >Agence</Link>
    </div>
  )
}

export default HomeHeroBottomText
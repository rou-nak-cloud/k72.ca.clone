import React from 'react'
import { Link } from 'react-router-dom'

const HomeHeroBottomText = () => {
  return (
    <div className='text-white font-[font300] flex items-center justify-center gap-5 mb-2'>
      <p className='absolute lg:w-[19vw] w-64 lg:right-10 right-0 bottom-26  lg:bottom-32 font-[font500] lg:text-md text-xs lg:leading-relaxed leading-tight'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
      <Link className='text-[6vw] border-2 border-white/90 rounded-full px-5 lg:pt-2 pt-1 pb-0 uppercase leading-[5.5vw] hover:text-[#D3FD50]' to='/projects' >Projects</Link>
      <Link className='text-[6vw] border-2 border-white/90 rounded-full px-5 lg:pt-2 pt-1 pb-0 uppercase leading-[5.5vw] hover:text-[#D3FD50]' to='/agence' >Agence</Link>
    </div>
  )
}

export default HomeHeroBottomText
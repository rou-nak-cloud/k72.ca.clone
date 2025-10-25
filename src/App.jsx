import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {
  useGSAP(function(){
    const tl = gsap.timeline()
    tl.from('.stair',{
      height:0,
      stagger:{
        amount:-0.2
      }
    })
    tl.to('.stair',{
      y:'100%',
      stagger:{
        amount:-0.1
      }
    })
  })
  return (
    <>
     <div className='fixed h-screen w-full flex z-20 top-0'>
       <div className='stair h-full w-1/5 bg-black'></div>
       <div className='stair h-full w-1/5 bg-black'></div>
       <div className='stair h-full w-1/5 bg-black'></div>
       <div className='stair h-full w-1/5 bg-black'></div>
       <div className='stair h-full w-1/5 bg-black'></div>
     </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
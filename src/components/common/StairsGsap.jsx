import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const StairsGsap = (props) => {
    const currentPath = useLocation().pathname;
     const stairParentRef = useRef(null);
     const pageRef = useRef(null);

  useGSAP(function(){
    const tl = gsap.timeline()

    tl.to(stairParentRef.current,{
      display:'block',
    })
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
    tl.to(stairParentRef.current,{
      display:'none',
    })
     tl.to('.stair',{
      y:'0%',
    })

    gsap.from(pageRef.current,{
      opacity:0,
      delay:1.3,
      // scale:1.2, causing issue with agence image part
    })
  },[currentPath])
  return (
   <div>
     <div ref={stairParentRef} className='fixed h-screen w-full z-20 top-0'>
      <div className='h-full w-full flex'>
       <div className='stair h-full w-1/5 bg-black'></div>
       <div className='stair h-full w-1/5 bg-black'></div>
       <div className='stair h-full w-1/5 bg-black'></div>
       <div className='stair h-full w-1/5 bg-black'></div>
       <div className='stair h-full w-1/5 bg-black'></div>
     </div>
     </div>

     <div ref={pageRef} className=''>
      {props.children}
     </div>
   </div>
  )
}

export default StairsGsap
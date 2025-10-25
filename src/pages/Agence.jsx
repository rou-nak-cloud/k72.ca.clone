import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imagesArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        // markers:true,
        start:'top 23%',
        end:'top -90%',
        scrub:true,
        pin:true,
        onUpdate:(elem)=>{
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imagesArray.length)
          } else {
            imageIndex = imagesArray.length - 1
          }
          imageRef.current.src = imagesArray[imageIndex]
        }
      }
    })
  })
  return (
    <>
   <div className='section1'>
    <div ref={imageDivRef} className='absolute overflow-hidden h-[40vh] w-[15vw] rounded-2xl top-45 left-[30vw] '>
      <img ref={imageRef} className='h-full w-full object-cover' src="" alt="" />
    </div>
      <div className='relative font-[font300] text-white'>
      <div className='mt-[52vh]'>
        <h1 className='text-[19vw] leading-[17vw] text-center uppercase'>soxian7e <br />douze</h1>
      </div>
      <div className='pl-[40%] mt-4 p-3'>
            <p className='text-4xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
      </div>
    </div>
   </div>
   <div className='section2 h-screen'>
     
   </div>
   </>
  )
}

export default Agence
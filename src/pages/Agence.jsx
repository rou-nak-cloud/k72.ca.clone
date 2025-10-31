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
   <div className='section1 py-1'>
    <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[40vh] lg:w-[15vw]
    h-[20vh] w-[32vw] rounded-2xl lg:top-45 top-[25px] left-[20vw] lg:left-[30vw] '>
      <img ref={imageRef} className='h-full w-full object-cover' src="" alt="" />
    </div>
      <div className='relative font-[font300] text-black'>
      <div className='mt-[52vh]'>
        <h1 className='lg:text-[19vw] text-[20vw] lg:mt-0 -mt-19.5 leading-[17vw] text-center uppercase'>soxian7e <br />douze</h1>
      </div>
      <div className='lg:pl-[40%] pl-10 mix-blend-color-burn lg:mt-4 mt-16 lg:-3 p-2'>
            <p className='lg:text-4xl text-2xl lg:leading-tight leading-tight '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
      </div>
    </div>
   </div>

   <div className='section2 lg:h-[90vh] h-[50vh] font-[font500] w-[100%] lg:px-25 px-3 lg:text-[1.5vw] text-[3vw] bg-red-50 flex justify-around items-center lg:gap-20 gap-5'>
     <div className=''>
      <h2>Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.</h2>
     </div>
     <div>Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même.</div>
     <div>Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers.</div>
   </div>

   <div className='marqueePart relative bg-black lg:h-[170vh] h-[130vh] rounded-t-4xl '>
    <div className='marqueeReverse moveX w-full absolute lg:top-[490px] top-[570px] left-5 uppercase text-lime-200 lg:text-[22vh] text-[21vw] font-[font500] leading-[18vh] pt-4 lg:z-1 z-3 whitespace-nowrap'>&nbsp;Olivier Oliver Oliver Oliver</div>
    <div className='pt-60 flex items-center relative justify-center'>
      <h2 className='z-4 absolute text-center lg:top-35 top-35 lg:text-6xl text-5xl text-lime-300'>Oliver Duclos</h2>
      <img className='rounded-3xl z-2' src="https://k72.ca/images/teamMembers/Olivier_640X960.jpg?w=640&h=960&s=9b715851e76624b3d00c6715af5c47cd" alt="" />
    </div>
    <div className='marqueeForward moveY z-3 absolute lg:top-[820px] top-[670px] right-20 uppercase text-lime-200 text-[22vh] font-[font500] leading-[18vh] pt-4 whitespace-nowrap'>
      duclos duclos duclos duclos
    </div>
      <div className='smallText text-white font-[font500] text-[3vh] absolute lg:right-20 lg:bottom-80 right-7 max-md:top-50 hover:text-lime-300 duration-200 transition-colors cursor-cell'>Designer Graphiques</div>
   </div>
   </>
  )
}

export default Agence
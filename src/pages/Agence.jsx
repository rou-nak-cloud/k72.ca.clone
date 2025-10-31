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
    <div ref={imageDivRef} className='absolute overflow-hidden h-[40vh] w-[15vw] rounded-2xl top-45 left-[30vw] '>
      <img ref={imageRef} className='h-full w-full object-cover' src="" alt="" />
    </div>
      <div className='relative font-[font300] text-black'>
      <div className='mt-[52vh]'>
        <h1 className='text-[19vw] leading-[17vw] text-center uppercase'>soxian7e <br />douze</h1>
      </div>
      <div className='pl-[40%] mt-4 p-3'>
            <p className='text-4xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
      </div>
    </div>
   </div>
   <div className='section2 h-[90vh] font-[font500] w-[100%] px-25 text-[1.5vw] bg-red-50 flex justify-around items-center gap-20'>
     <div className=''>
      <h2>Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.</h2>
     </div>
     <div>Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même.</div>
     <div>Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers.</div>
   </div>

   <div className='marqueePart relative bg-black h-[170vh] rounded-t-4xl '>
    <div className='marqueeReverse moveX w-full absolute top-[490px] left-5 uppercase text-lime-200 text-[22vh] font-[font500] leading-[18vh] pt-4 z-1 whitespace-nowrap'>Olivier</div>
    <div className='pt-60 flex items-center justify-center'>
      <img className='rounded-3xl z-2' src="https://k72.ca/images/teamMembers/Olivier_640X960.jpg?w=640&h=960&s=9b715851e76624b3d00c6715af5c47cd" alt="" />
    </div>
    <div className='marqueeForward moveX z-3 absolute top-[820px] right-20 uppercase text-lime-300 text-[22vh] font-[font500] leading-[18vh] pt-4 whitespace-nowrap'>
      duclos
    </div>
      <div className='smallText text-white font-[font500] text-[3vh] absolute right-10 bottom-70 hover:text-lime-300 duration-200 transition-colors cursor-cell'>Designer Graphiques</div>
   </div>
   </>
  )
}

export default Agence
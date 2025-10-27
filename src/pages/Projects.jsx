import React from 'react'
import ProjectsCard from '../components/projects/ProjectsCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Projects = () => {

    const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  }]

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function(){
    gsap.from('.hero',{
      height:'90px',
      stagger:{
        amount:0.2
      },
      scrollTrigger:{
        trigger:'.lol',
        start:'top 90%',
        end:'top -190%',
        markers:true,
        scrub:true,
      }
    })
  })

  return (
    <>
    <div className='p-2'>
     <div className='pt-[40vh]'>
       <h2 className='font-[font500] text-[10vw] uppercase'>Projets</h2>
     </div>
      <div className='outerDiv -mt-15 lol'>
          {projects.map((elem,idx)=>(
           <div className='hero mb-1'>
            <ProjectsCard key={idx} image1={elem.image1} image2={elem.image2} />
           </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Projects
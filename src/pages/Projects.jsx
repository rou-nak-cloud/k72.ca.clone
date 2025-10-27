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
  }, {
    image1:'https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996',
    image2:'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c'
  }, {
    image1:'https://k72.ca/images/caseStudies/BEST/BEST_site_menu_Thumbnail.jpg?w=1280&h=960&s=d3b20d81946c6a7f4a6cd7ce1cfbb0fd',
    image2:'https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47'
  }, {
    image1:'https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14',
    image2:'https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124'
  }, {
    image1:'https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000',
    image2:'https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821'
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
        end:'top -300%',
        // markers:true,
        scrub:true,
      }
    })
  })

  return (
    <>
    <div className='px-1'>
     <div className='pt-[40vh] flex'>
       <h2 className='font-[font500] text-[10vw] uppercase'>Projets</h2>
       <h1 className='text-black font-[font500] text-[2vw] mt-10 ml-2'>16.</h1>
     </div>
      <div className='outerDiv -mt-15 lol'>
          {projects.map((elem,idx)=>(
           <div className='hero mb-1'>
            <ProjectsCard key={idx} image1={elem.image1} image2={elem.image2} />
           </div>
        ))}
      </div>
      <div className='h-[60vh] bg-black flex justify-between gap-2'>
        <div className='flex justify-center items-start'>
          <h1 className='uppercase text-white border-2 border-white text-[10vh] font-[font500] ml-10 my-5 -pb-7 px-4 rounded-[30px] hover:text-lime-300 hover:border-lime-300 transition-colors cursor-cell'>fb</h1>
          <h1 className='uppercase text-white border-2 border-white text-[10vh] font-[font500] ml-7 my-5 -pb-7 px-4 rounded-[30px] hover:text-lime-300 hover:border-lime-300 transition-colors cursor-cell'>ig</h1>
          <h1 className='uppercase text-white border-2 border-white text-[10vh] font-[font500] ml-7  my-5 -pb-7 px-4 rounded-[30px] hover:text-lime-300 hover:border-lime-300 transition-colors cursor-cell'>in</h1>
          <h1 className='uppercase text-white border-2 border-white text-[10vh] font-[font500] ml-7  my-5 -pb-7 px-4 rounded-[30px] hover:text-lime-300 hover:border-lime-300 transition-colors cursor-cell'>be</h1>
        </div>
        <div className=''>
          <h1 className='uppercase text-white border-2 border-white text-[10vh] font-[font500] my-5 -pb-7 px-4 mr-8 rounded-[30px] hover:text-lime-300 hover:border-lime-300 transition-colors cursor-cell'>contact</h1>
        </div>
      </div>
      <div className='footer text-white bg-black font-[font300] flex justify-between items-start pb-2'>
          <div className='text-[1.45vw] pl-10'>
            <h1>TIME</h1>
          </div>
          <div className='flex gap-10'>
            <h3 className='uppercase hover:text-lime-300 duration-150 transition-colors'>Politique de confidentialité</h3>
            <h3 className='uppercase hover:text-lime-300 duration-150 transition-colors'>Avis de confidentialité</h3>
            <h3 className='uppercase hover:text-lime-300 duration-150 transition-colors'>Rapport éthique</h3>
            <h3 className='uppercase hover:text-lime-300 duration-150 transition-colors'>options de consentement</h3>
          </div>
          <div className='text-[1.45vw] pr-10'>
            <h1 className=' hover:text-lime-300 duration-150 transition-colors'>rBAKSHI.</h1>
          </div>
      </div>
    </div>
    </>
  )
}

export default Projects
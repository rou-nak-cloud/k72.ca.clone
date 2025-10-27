import React from 'react'
import ProjectsCard from '../components/projects/ProjectsCard'

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

  return (
    <>
    <div className='p-2'>
     <div className='pt-[40vh]'>
       <h2 className='font-[font500] text-[10vw] uppercase'>Projets</h2>
     </div>
      <div className='outerDiv -mt-15'>
        {projects.map((elem,idx)=>(
           <ProjectsCard key={idx} image1={elem.image1} image2={elem.image2} />
        ))}
      </div>
    </div>
    </>
  )
}

export default Projects
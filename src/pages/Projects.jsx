import React from 'react'
import ProjectsCard from '../components/projects/ProjectsCard'

const Projects = () => {
  return (
    <>
    <div className='p-2'>
     <div className='pt-[40vh]'>
       <h2 className='font-[font500] text-[10vw] uppercase'>Projets</h2>
     </div>
      <div className='outerDiv -mt-15'>
        <ProjectsCard />
      </div>
    </div>
    </>
  )
}

export default Projects
import React from 'react'

const ProjectsCard = () => {
  return (
    <>
      <div className='innerDivFull w-full h-[400px] flex gap-1 '>
          <div className='brotherDiv group relative w-1/2 h-full hover:rounded-[30px] transition-all overflow-hidden'>
            <img className='w-full h-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg" alt="" />
            <div className='opacity-0 group-hover:opacity-100 transition-all duration-200 bg-black/20 absolute top-0 left-0 h-full w-full flex justify-center items-center cursor-cell'>
              <h2 className='uppercase text-4xl pt-1 px-2 font-[font300] border-3 border-white text-white rounded-full'>Voir de louto</h2>
            </div>
          </div>
          <div className='brotherDiv group relative w-1/2 h-full hover:rounded-[30px] transition-all overflow-hidden'>
            <img className='w-full h-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg" alt="" />
            <div className='opacity-0 group-hover:opacity-100 transition-all duration-200 bg-black/20 absolute top-0 left-0 h-full w-full flex justify-center items-center cursor-cell'>
              <h2 className='uppercase text-4xl pt-1 px-2 font-[font300] border-3 border-white text-white rounded-full'>Voir de louto</h2>
            </div>
          </div>
        </div>
    </>
  )
}

export default ProjectsCard
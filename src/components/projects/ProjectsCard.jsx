import React from 'react'

const ProjectsCard = (props) => {
  return (
    <>
      <div className='innerDivFull w-full h-[600px] flex gap-1 mb-2'>
          <div className='brotherDiv group relative w-1/2 h-full hover:rounded-[30px] transition-all overflow-hidden'>
            <img className='w-full h-full object-cover' src={props.image1} alt="" />
            <div className='opacity-0 group-hover:opacity-100 transition-all duration-200 bg-black/30 absolute top-0 left-0 h-full w-full flex justify-center items-center cursor-cell'>
              <h2 className='uppercase text-4xl pt-1 px-2 font-[font300] border-3 border-white text-white rounded-full'>Voir de louto</h2>
            </div>
          </div>
          <div className='brotherDiv group relative w-1/2 h-full hover:rounded-[30px] transition-all overflow-hidden '>
            <img className='w-full h-full object-cover' src={props.image2} alt="" />
            <div className='opacity-0 group-hover:opacity-100 transition-all duration-200 bg-black/30 absolute top-0 left-0 h-full w-full flex justify-center items-center cursor-cell'>
              <h2 className='uppercase text-4xl pt-1 px-2 font-[font300] border-3 border-white text-white rounded-full'>Voir de louto</h2>
            </div>
          </div>
        </div>
    </>
  )
}

export default ProjectsCard
import React from 'react'

const ProjectsCard = (props) => {
  return (
    <>
      <div className='innerDivFull w-full h-[450px] flex lg:flex-row flex-col lg:gap-2 gap-1 mb-1'>
          <div className='brotherDiv group relative lg:w-1/2 w-full h-full hover:rounded-[30px] transition-all overflow-hidden'>
            <img className='w-full h-full object-cover' src={props.image1} alt="" />
            <div className='opacity-0 group-hover:opacity-100 transition-all duration-200 bg-black/30 absolute top-0 left-0 h-full w-full flex justify-center items-center cursor-cell'>
              <h2 className='uppercase text-4xl pt-1 px-2 font-[font300] border-3 border-white text-white rounded-full'>Voir de louto</h2>
            </div>
          </div>
          <div className='brotherDiv group relative lg:w-1/2 w-full h-full hover:rounded-[30px] transition-all overflow-hidden '>
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
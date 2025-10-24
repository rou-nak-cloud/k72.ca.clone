import React, { useRef } from 'react'

const Agence = () => {
  const imageDivRef = useRef(null);
  return (
    <>
   <div className='section1'>
    <div ref={imageDivRef} className='absolute overflow-hidden h-[40vh] w-[15vw] rounded-2xl top-45 left-[30vw] bg-red-400'>
      <img className='h-full w-full object-cover' src="" alt="" />
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
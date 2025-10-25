import React from 'react'

const FullScreenNav = () => {
  return (
    <>
     <div className='fullScreenNav text-white bg-black h-screen w-full absolute py-40'>
        <div className='allLinks'>
            <div className='link border-t-1 border-white/50 relative'>
                <h1 className='font-[font300] text-[8vw] text-center pt-3  leading-[.9] uppercase'>Projects</h1>
                <div className='absolute flex top-0 bg-[#D3FD50] text-black'>
                    <div className='moveX flex items-center'>
                        <h2 className='whitespace-nowrap font-[font300] text-[8vw] text-center pt-3  leading-[.9] uppercase'>Pour Tout Voir</h2>
                        <img className='h-26 w-80 shrink-0 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                        <h2 className='whitespace-nowrap font-[font300] text-[8vw] text-center pt-3  leading-[.9] uppercase'>Pour Tout Voir</h2>
                        <img className='h-26 w-80 shrink-0 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                    </div>   
                    <div className='moveX flex items-center'>
                        <h2 className='whitespace-nowrap font-[font300] text-[8vw] text-center pt-3  leading-[.9] uppercase'>Pour Tout Voir</h2>
                        <img className='h-26 w-80 shrink-0 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                        <h2 className='whitespace-nowrap font-[font300] text-[8vw] text-center pt-3  leading-[.9] uppercase'>Pour Tout Voir</h2>
                        <img className='h-26 w-80 shrink-0 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                    </div>   
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default FullScreenNav
import React, { useContext, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'
import { NavbarContext } from '../context/NavContext'

const FullScreenNav = () => {
    const fullNavLinkRef = useRef(null);
    const fullScreenRef = useRef(null);

    const [navOpen, setNavOpen] = useContext(NavbarContext);
  
    function gsapAnimation(){
     const tl = gsap.timeline()

    tl.from('.stairRing',{
      height:0,
      delay:0.1,
      stagger:{
        amount:-0.2
      }
    })
    tl.from(fullNavLinkRef.current,{
        opacity:0,
    })
    tl.from('.link',{
        delay:-0.2,
        rotateX:90,
        opacity:0,
        stagger:{
            amount:0.2,
        }
    })
    }

    useGSAP(function(){
        if(navOpen){
            gsap.to('.fullScreenNav',{
                display:'block'
            })
            gsapAnimation()
        }else{
             gsap.to(fullScreenRef.current,{
                display:'none'
            })
        }
  },[navOpen])
  return (
    <>
     <div ref={fullScreenRef} className='fullScreenNav z-50 text-white  h-screen w-full absolute overflow-hidden'>
     <div className='stairsAnimation h-screen w-full fixed'>
            <div className='h-full w-full flex'>
            <div className='stairRing h-full w-1/5 bg-black'></div>
            <div className='stairRing h-full w-1/5 bg-black'></div>
            <div className='stairRing h-full w-1/5 bg-black'></div>
            <div className='stairRing h-full w-1/5 bg-black'></div>
            <div className='stairRing h-full w-1/5 bg-black'></div>
     </div>
        </div>

        <div ref={fullNavLinkRef} className='relative'>
            <div className='flex w-full justify-between items-start'>
        <div className='p-2'>
        <div className='w-40 h-12'>
            <svg className=' w-full h-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                 <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
            </svg>
        </div>
        </div>
        <div onClick={()=>{
            setNavOpen(false)
        }} className='h-16 w-15 relative cursor-pointer'>
            <div className='h-full w-1 -rotate-45 origin-center absolute left-7 bg-[#D3FD50]'></div>
            <div className='h-full w-1 rotate-45 origin-center absolute right-7 bg-[#D3FD50]'></div>
        </div>
        </div>
        <div className='allLinks py-25'>

            <div className='link origin-top border-t-1 border-white/50 relative'>
                <h1 className='font-[font300] text-[8vw] text-center pt-3  leading-[.9] uppercase'>Projects</h1>
                <div className='moveLink absolute flex top-0 bg-[#D3FD50] text-black cursor-cell'>
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

            <div className='link origin-top border-t-1 border-white/50 relative'>
                <h1 className='font-[font300] text-[8vw] text-center pt-3  leading-[.9] uppercase'>Agence</h1>
                <div className='moveLink absolute flex top-0 bg-[#D3FD50] text-black cursor-cell'>
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

            <div className='link origin-top border-t-1 border-white/50 relative'>
                <h1 className='font-[font300] text-[8vw] text-center pt-3  leading-[.9] uppercase'>Contact</h1>
                <div className='moveLink absolute flex top-0 bg-[#D3FD50] text-black cursor-cell'>
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

            <div className='link origin-top border-y-1 border-white/50 relative'>
                <h1 className='font-[font300] text-[8vw] text-center pt-3  leading-[.9] uppercase'>Blogs</h1>
                <div className='moveLink absolute flex top-0 bg-[#D3FD50] text-black cursor-cell'>
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
     </div>
    </>
  )
}

export default FullScreenNav
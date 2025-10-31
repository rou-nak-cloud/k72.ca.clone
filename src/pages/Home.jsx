import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeHeroBottomText from '../components/home/HomeHeroBottomText'
import LocalTime from '../components/common/LocalTime'

const Home = () => {
  return (
    <>
    <div className='h-screen w-screen fixed'>
      <Video />
    </div>

    <div className='h-screen w-screen relative flex flex-col justify-between overflow-hidden'>
      <HomeHeroText />
      <HomeHeroBottomText />
    </div>

    <div className='absolute top-[91%] left-[3%]'>
      <LocalTime  />
    </div>
    </>
  )
}

export default Home
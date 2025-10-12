import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeHeroBottomText from '../components/home/HomeHeroBottomText'

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
    </>
  )
}

export default Home
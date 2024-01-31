import React from 'react'
import { Tilt } from 'react-tilt'
import { myImage } from '../assets'
const Hero = () => {
  return (
    <section className='relative w-[80%] h-screen mx-auto'>
      <div className="absolute top-[200px] mx-auto flex flex-col items-center w-full gap-8 xs:gap-6 xs:top-[180px]">
        <h1 className="dark:text-white text-[#804dee] text-4xl font-bold text-center leading-12 xs:text-2xl" >
          Full Stack Developer, Coder and Artist.
        </h1>
        <p className='dark:text-white text-[#804dee] text-xl text-center mb-10 xs:text-lg'>Dedicated to Continuous Learning and Growth.</p>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <img src={myImage} alt='myimg' className='rounded-full w-48 cursor-pointer shadow-imgShadow hover:shadow-imgShadowHover transition-all duration-500 ease-in-out' />
        </Tilt>
      </div>
    </section>
  )
}

export default Hero
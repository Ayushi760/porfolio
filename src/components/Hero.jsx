import React from 'react'
import { Tilt } from 'react-tilt'
const Hero = () => {
  return (
    <section className='relative w-[80%] h-screen mx-auto'>
      <div className="absolute top-[180px] mx-auto flex flex-col items-center w-full gap-8 xs:gap-6">
        <h1 className="text-white text-4xl font-bold text-center leading-12 xs:text-2xl" >
          Full Stack Developer, Coder and Artist.
        </h1>
        <p className='text-white text-xl text-center xs:text-lg'>Dedicated to Continuous Learning and Growth.</p>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <img src='myImage.jpg' alt='image' className='rounded-full w-48 cursor-pointer shadow-imgShadow hover:shadow-imgShadowHover' />
        </Tilt>
      </div>
    </section>
  )
}

export default Hero
import React from 'react'
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">My Skills</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[30px] text-[30px]">
          Technical Skills.
        </h2>
      </motion.div>
    <div className='flex flex-wrap justify-center gap-4 mt-10'>
      {technologies.map((technology) => (
        <div  key={technology.name} className='w-[48%] xs:w-full'>
          {technology.name}
          <div className="relative bg-gray-300 h-6 rounded overflow-hidden">
              <div
                style={{background:`${technology.color}`,width:`${technology.value}`,height:"100%"}}
              />
            </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
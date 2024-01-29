import React from 'react'
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p>My Skills</p>
        <h2>
          Technical Skills.
        </h2>
      </motion.div>
    <div className='flex  justify-center gap-10 mt-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {technology.name}
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
import React from 'react'
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import { motion } from 'framer-motion';
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My Skills</p>
        <h2 className={styles.sectionHeadText}>
          Technical Skills.
        </h2>
      </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
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
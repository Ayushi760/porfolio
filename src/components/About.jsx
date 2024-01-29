import React from 'react'
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn,textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[210px] w-full max-w-[210px]' 

  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
       
        className='bg-tertiary rounded-[20px] overflow-hidden h-[190px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='object-cover w-full h-full'
        />
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <>
    <motion.div>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>
        Overview
      </h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[15px] leading-[30px] '>
    Aspiring developer with a strong desire to contribute my technical skills and knowledge to an organization. Committed to continuous learning and growth, I aim to harness my passion to deliver valuable solutions while enhancing my expertise within a team.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-5 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")
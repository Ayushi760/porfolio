import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
const ExperienceCard = ({ experience,theme }) => (
  <VerticalTimelineElement contentStyle={{ background:theme==="dark"? '#1d1836':"#e5e7eb", color:theme==="dark"?"#fff":"#434343" }} contentArrowStyle={{ borderRight:theme==="dark"? '7px solid #232631':'7px solid #e2e4ea' }} date={experience.date} iconStyle={{ background: '#fff',boxShadow:theme==="dark"? "0 0 0 4px #fff, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)":"0 0 4px #bf61ff" }}  icon={<div className='flex justify-center items-center w-full h-full'>
    <img src={experience.icon} alt={experience.company_name} className='w-[90%] h-[70%] object-contain rounded-full' />
  </div>}>
    <div>
      <h3 className='dark:text-white text-[#804dee] text-[24px] font-bold xs:text-[16px]'>{experience.title}</h3>
      <p className='text-secondary text-[16px] font-semibold xs:text-xs' style={{ margin: 0 }}>{experience.company_name}</p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`} className='dark:text-white-100 text-[#434343] text-[14px] pl-1 tracking-wider xs:text-[10px]'>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)
const Experience = ({theme}) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] dark:text-secondary text-[#bf61ff] uppercase tracking-wider">What I have done so far</p>
        <h2 className="dark:text-white text-[#804dee] font-black md:text-[60px] sm:text-[50px] xs:text-[30px] text-[30px]">
          Work Experience.
        </h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor={theme==="dark"?"#fff":"#bf61ff"}>
        {experiences.map((experience, index) => (<ExperienceCard key={index} experience={experience} theme={theme} />))}
        </VerticalTimeline >
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")
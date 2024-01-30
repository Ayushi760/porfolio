import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import Swal from 'sweetalert2'


const ServiceCard = ({ index, title, icon }) => {
  const handleImageClick = () => {
    Swal.fire({
      title: "Do you want to connect with me on instagram?",
      showConfirmButton:true,
      showCancelButton:true,
      confirmButtonText: "Yes",
      cancelButtonText:"Cancel",
      customClass:{
        title:"text-lg",
        confirmButton:"text-xs bg-[#804dee]",
        cancelButton:"text-xs",
      }
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        window.open("https://www.instagram.com/ayushi___saxena/", "_blank");
      }
    });
  };
  return (
    <Tilt className='xs:max-w-[160px] w-full max-w-[210px]'

    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
          <div
            className='bg-tertiary rounded-[20px] overflow-hidden h-[180px] flex justify-evenly items-center flex-col xs:h-[150px]'
          >
            <img
              src={icon}
              alt='web-development'
              className='w-full h-full cursor-pointer object-cover'
              onClick={handleImageClick}
            />
          </div>
      </motion.div>
    </Tilt>
  )
};
const About = () => {
  return (
    <>
      <motion.div>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[30px] text-[30px]">
          Overview
        </h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[15px] leading-[30px] xs:text-sm'>
        Aspiring developer with a strong desire to contribute my technical skills and knowledge to an organization. Committed to continuous learning and growth, I aim to harness my passion to deliver valuable solutions while enhancing my expertise within a team.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-5 justify-center xs:gap-2'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { instagram, giticon, linkedin } from '../assets';


const ServiceCard = ({ index, title, icon }) => {
  const handleImageClick = () => {
    Swal.fire({
      title: "Do you want to connect with me on instagram?",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
      customClass: {
        title: "text-lg",
        confirmButton: "text-xs bg-[#804dee]",
        cancelButton: "text-xs",
      }
    }).then((result) => {
      if (result.isConfirmed) {
        window.open("https://www.instagram.com/ayushi___saxena/", "_blank");
      }
    });
  };
  return (
    <Tilt className='xs:max-w-[160px] w-full max-w-[210px]'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] dark:shadow-card'
      >
        <div className='rounded-[20px] overflow-hidden h-[180px] flex justify-evenly items-center flex-col xs:h-[150px]'>
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
        <p className="sm:text-[18px] text-[14px] dark:text-secondary text-[#bf61ff] uppercase tracking-wider">Introduction</p>
        <h2 className="dark:text-white text-[#804dee] font-black md:text-[60px] sm:text-[50px] xs:text-[30px] text-[30px]">
          Overview
        </h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[15px] leading-[30px] xs:text-sm'>
        Aspiring developer with a strong desire to contribute my technical skills and knowledge to an organization. Committed to continuous learning and growth, I aim to harness my passion to deliver valuable solutions while enhancing my expertise within a team
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-5 justify-center xs:gap-2'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className='flex mt-14 w-full justify-center gap-5'>
        <Link to="https://www.linkedin.com/in/ayushi-saxena-b094b0217/" target='_blank'><img src={linkedin} alt='linkedin' /></Link>
        <Link to="https://github.com/Ayushi760" target='_blank'><img src={giticon} alt='git' /></Link>
        <Link to="https://www.instagram.com/ayushi___saxena/" target='_blank'><img src={instagram} alt='instagram' /></Link>
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")

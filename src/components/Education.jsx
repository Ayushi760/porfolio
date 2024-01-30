import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  degree,
  name,
  period,
  institute,
  marks,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl max-w-[250px] xs:max-w-full'
  >
    

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[10px]'>{degree}</p>
      <p className='text-white font-black text-[18px]'>{name}</p>
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            {institute}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
           {period}
          </p>
          <p className='mt-1 blue-text-gradient text-[12px]'>
           CGPA/Percentage - {marks}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className="bg-tertiary rounded-2xl sm:px-16 px-6 sm:py-16 py-10 min-h-[180px]"
      >
        <motion.div variants={textVariant()}>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[30px] text-[30px] mb-4">Education</h2>
        </motion.div>
      </div>
      <div className="-mt-20 pb-14 px-6 flex gap-4 flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
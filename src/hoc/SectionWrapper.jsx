import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC(props) {
    const { theme } = props;
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 overflow-hidden`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component theme={theme} {...props}/>
      </motion.section>
    );
  };

export default SectionWrapper;

import Wave from './Wave';

import { motion } from 'framer-motion';

import { fade, photoAnimation, titleAnimation } from '../animation';
import { About, Description, Image, Hide } from '../styles';

import home1 from '../img/home1.png';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className='title'>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              Your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt='guy with a camera'
        />
      </Image>
      <Wave></Wave>
    </About>
  );
};

export default AboutSection;

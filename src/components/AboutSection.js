import Wave from './Wave';

import { motion } from 'framer-motion';

import { fade, photoAnimation, titleAnimation } from '../animation';
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from '../styles';

import home1 from '../img/home1.png';

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div className='title'>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>
              Your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt='guy with a camera'
        />
      </StyledImage>
      <Wave></Wave>
    </StyledAbout>
  );
};

export default AboutSection;

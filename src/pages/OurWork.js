import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Hide } from '../styles';

import { motion } from 'framer-motion';
import {
  fade,
  lineAnimation,
  pageAnimation,
  photoAnimation,
  slider,
  sliderContainer,
} from '../animation';

import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

const OurWork = () => {
  return (
    <StyledWork
      variants={pageAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <StyledMovie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className='line'></motion.div>
        <Link to='the-athlete'>
          <Hide>
            <motion.img variants={photoAnimation} src={athlete} alt='athlete' />
          </Hide>
        </Link>
      </StyledMovie>
      <StyledMovie>
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div variants={lineAnimation} className='line'></motion.div>
        <Link to='the-racer'>
          <Hide>
            <motion.img variants={photoAnimation} src={theracer} alt='racer' />
          </Hide>
        </Link>
      </StyledMovie>
      <StyledMovie>
        <motion.h2 variants={fade}>Good Times</motion.h2>
        <motion.div variants={lineAnimation} className='line'></motion.div>
        <Link to='good-times'>
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={goodtimes}
              alt='goodtimes'
            />
          </Hide>
        </Link>
      </StyledMovie>
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
  background: #fff;
  overflow: hidden;

  h2 {
    padding: 1rem 0rem;
  }
`;

const StyledMovie = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8eb2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;

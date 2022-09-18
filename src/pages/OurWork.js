import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

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
      <StyledMovie>
        <h2>The Athlete</h2>
        <div className='line'></div>
        <Link to='the-athlete'>
          <img src={athlete} alt='athlete' />
        </Link>
      </StyledMovie>
      <StyledMovie>
        <h2>The Racer</h2>
        <div className='line'></div>
        <Link to='the-racer'>
          <img src={theracer} alt='racer' />
        </Link>
      </StyledMovie>
      <StyledMovie>
        <h2>Good Times</h2>
        <div className='line'></div>
        <Link to='good-times'>
          <img src={goodtimes} alt='goodtimes' />
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
    background: #ccc;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;

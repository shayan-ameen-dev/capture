import { motion } from 'framer-motion';
import { useScroll } from '../hooks/useScroll';
import { scrollAnimation } from '../animation';

import { StyledAbout, StyledDescription, StyledImage } from '../styles';

import clock from '../img/clock.svg';
import teamwork from '../img/teamwork.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import home2 from '../img/home2.png';
import styled from 'styled-components';

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <StyledServices
      variants={scrollAnimation}
      animate={controls}
      initial='initial'
      ref={element}
    >
      <StyledDescription>
        <h2>
          High <span>quality</span> services
        </h2>
        <StyledCards>
          <StyledCard>
            <StyledIcon>
              <img src={clock} alt='icon' />
              <h3>Efficient</h3>
            </StyledIcon>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <StyledIcon>
              <img src={teamwork} alt='icon' />
              <h3>Teamwork</h3>
            </StyledIcon>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <StyledIcon>
              <img src={diaphragm} alt='icon' />
              <h3>Diaphragm</h3>
            </StyledIcon>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <StyledIcon>
              <img src={money} alt='icon' />
              <h3>Affordable</h3>
            </StyledIcon>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={home2} alt='camera' />
      </StyledImage>
    </StyledServices>
  );
};

const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`;

const StyledCards = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
`;

const StyledCard = styled(motion.div)`
  flex-basis: 20rem;
`;

const StyledIcon = styled(motion.div)`
  display: flex;
  align-items: center;

  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
`;

export default ServicesSection;

import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../animation';

import styled from 'styled-components';
import { StyledHide } from '../styles';

const ContactUs = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <StyledTitle>
        <StyledHide>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </StyledHide>
      </StyledTitle>
      <div>
        <StyledHide>
          <StyledSocial variants={titleAnimation}>
            <StyledCircle />
            <h2>Send us a message.</h2>
          </StyledSocial>
        </StyledHide>
        <StyledHide>
          <StyledSocial variants={titleAnimation}>
            <StyledCircle />
            <h2>Send an email.</h2>
          </StyledSocial>
        </StyledHide>
        <StyledHide>
          <StyledSocial variants={titleAnimation}>
            <StyledCircle />
            <h2>Contact us at social media.</h2>
          </StyledSocial>
        </StyledHide>
      </div>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  background: #fff;
  min-height: 90vh;
`;

const StyledTitle = styled(motion.div)`
  margin-bottom: 4rem;
  color: black;
`;

const StyledCircle = styled(motion.div)`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

const StyledSocial = styled(motion.div)`
  display: flex;
  align-items: center;

  h2 {
    margin: 2rem;
  }
`;
export default ContactUs;

import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledAbout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  color: white;
`;

export const StyledDescription = styled(motion.div)`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;

  h2 {
    font-weight: lighter;
  }
`;

export const StyledImage = styled(motion.div)`
  flex: 1;
  overflow: hidden;
  z-index: 2;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const StyledHide = styled(motion.div)`
  overflow: hidden;
`;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

import { useState } from 'react';
import { motion } from 'framer-motion';

const FaqToggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <StyledQuestion layout onClick={() => setToggle(!toggle)}>
      <StyledContainer>
        <motion.h4 layout>{title}</motion.h4>
        <FontAwesomeIcon icon={toggle ? faAngleUp : faAngleDown} size='2x' />
      </StyledContainer>
      {toggle ? children : null}
      <StyledFaqLine />
    </StyledQuestion>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledFaqLine = styled.div`
  background: #ccc;
  height: 0.2rem;
  margin: 2rem 0;
  width: 100%;
`;

const StyledQuestion = styled(motion.div)`
  padding: 3rem 0;
  cursor: pointer;
`;

export default FaqToggle;

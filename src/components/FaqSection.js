import styled from 'styled-components';
import { About } from '../styles';

import { AnimateSharedLayout } from 'framer-motion';

import FaqToggle from './FaqToggle';

const FaqSection = () => {
  return (
    <StyledFaq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>

      <FaqToggle title='How do I start?'>
        <StyledAnswer>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
            nobis!
          </p>
        </StyledAnswer>
      </FaqToggle>
      <FaqToggle title='Daily Schedule'>
        <StyledAnswer>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
            nobis!
          </p>
        </StyledAnswer>
      </FaqToggle>
      <FaqToggle title='Different Payment Methods'>
        <StyledAnswer>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
            nobis!
          </p>
        </StyledAnswer>
      </FaqToggle>
      <FaqToggle title='What Products Do You Offer?'>
        <StyledAnswer>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
            nobis!
          </p>
        </StyledAnswer>
      </FaqToggle>
    </StyledFaq>
  );
};

const StyledFaq = styled(About)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
`;

const StyledAnswer = styled.div`
  padding: 2rem 0;

  p {
    padding: 1rem 0;
  }
`;

export default FaqSection;

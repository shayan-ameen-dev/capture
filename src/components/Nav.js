import { useLocation } from 'react-router-dom';

import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id='logo' to='/'>
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>1. About Us</Link>
          <StyledLine
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/' ? '50%' : '0%' }}
            transition={{ duration: 0.5 }}
          />
        </li>
        <li>
          <Link to='/work'>2. Our Work</Link>
          <StyledLine
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/work' ? '50%' : '0%' }}
            transition={{ duration: 0.5 }}
          />
        </li>
        <li>
          <Link to='/contact'>3. Contact Us</Link>
          <StyledLine
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/contact' ? '50%' : '0%' }}
            transition={{ duration: 0.5 }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;

  #logo {
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

const StyledLine = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 5%;
  position: absolute;
  bottom: -80%;
  left: 60%;
`;

export default Nav;

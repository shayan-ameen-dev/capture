import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';

import GlobalStyle from './components/GlobalStyle';

import ScrollTop from './components/ScrollTop';
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
import ContactUs from './pages/ContactUs';

const App = () => {
  const location = useLocation();

  return (
    <div className='App'>
      <GlobalStyle />
      <ScrollTop />
      <Nav />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<AboutUs />} />
          <Route path='/work' element={<OurWork />} />
          <Route path='/work/:slug' element={<MovieDetail />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;

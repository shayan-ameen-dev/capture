import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import ServicesSection from '../components/ServicesSection';

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;

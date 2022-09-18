import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <h1>ContactUs</h1>
    </motion.div>
  );
};

export default ContactUs;

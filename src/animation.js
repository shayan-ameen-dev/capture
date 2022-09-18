export const pageAnimation = {
  initial: {
    opacity: 0,
    y: 300,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },

  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.25,
    },
  },
};

export const titleAnimation = {
  initial: { y: 200 },
  animate: {
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const photoAnimation = {
  initial: { opacity: 0, scale: 1.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

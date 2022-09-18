export const pageAnimation = {
  initial: {
    opacity: 0,
    y: 300,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },

  exit: {
    opacity: 0,
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

export const lineAnimation = {
  initial: { width: '0%' },
  animate: {
    width: '100%',
    transition: { duration: 1 },
  },
};

export const slider = {
  initial: { x: '-130%', skew: '45deg' },
  animate: {
    x: '100%',
    skew: '0deg',
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

export const sliderContainer = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: 'easeOut',
    },
  },
};

export const scrollAnimation = {
  initial: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

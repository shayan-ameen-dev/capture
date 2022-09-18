import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

import styled from 'styled-components';

import Award from '../components/Award';

import { MovieState } from '../movieState';

const MovieDetail = () => {
  const params = useParams();

  const [movies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter(
      (movie) => movie.slug === params.slug
    )[0];
    setMovie(currentMovie);
  }, [movies, params.slug]);

  return (
    <StyledDetails
      variants={pageAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <StyledHeadline>
        <h2>{movie?.title}</h2>
        <img src={movie?.mainImg} alt='movie' />
      </StyledHeadline>
      <StyledAwards>
        {movie?.awards.map((award) => (
          <Award award={award} key={award.title} />
        ))}
      </StyledAwards>
      <StyledImage>
        <img src={movie?.secondaryImg} alt='movie' />
      </StyledImage>
    </StyledDetails>
  );
};

const StyledDetails = styled(motion.div)`
  color: white;
`;

const StyledHeadline = styled.div`
  min-height: 90vh;
  padding-top: 20rem;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledAwards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const StyledImage = styled.div`
  min-height: 50vh;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default MovieDetail;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import Award from '../components/Award';

import { MovieState } from '../movieState';

const MovieDetail = () => {
  const movieSlug = useParams().id;

  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((movie) => movie.slug === movieSlug)[0];
    setMovie(currentMovie);
  }, [movies, movieSlug]);

  return (
    <StyledDetails>
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

const StyledDetails = styled.div`
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

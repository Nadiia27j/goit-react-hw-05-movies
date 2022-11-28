import { useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { Suspense } from 'react';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  const from = location.state?.from ?? '/';

  return (
    <>
      {movie && (
        <Container>
          <LinkButton to={from}>Go back</LinkButton>
          <MovieInfo info={movie}></MovieInfo>
          <AddInfo>
            <AddInfoTitle> Additional information</AddInfoTitle>
            <AddInfoWrapper>
              <ul>
                <AddInfoItem>
                  <AddInfoItemLink to="cast" state={{ from }}>
                    Cast
                  </AddInfoItemLink>
                </AddInfoItem>
                <AddInfoItem>
                  <AddInfoItemLink to="reviews" state={{ from }}>
                    Reviews
                  </AddInfoItemLink>
                </AddInfoItem>
              </ul>
            </AddInfoWrapper>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </AddInfo>
        </Container>
      )}
    </>
  );
};

export default MovieDetails;
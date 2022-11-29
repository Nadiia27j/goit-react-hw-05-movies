import PropTypes from 'prop-types';
import {
    MovieInfoContainer,
    MovieInfoWrapper,
    MovieInfoTitle,
    MovieInfoSubTitle,
    MovieInfoDetails,
  } from './MovieInfo.styled';

  
export const MovieInfo = ({ info }) => {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = info;

  const getYear = () => new Date(`${release_date}`).getFullYear();
  const getScor = () => Math.round(`${vote_average}` * 10);

  return (
    <MovieInfoContainer>
      <MovieInfoWrapper>
        <MovieInfoTitle>
          {original_title} ({getYear()})
        </MovieInfoTitle>
        <MovieInfoDetails>User Score : {getScor()}%</MovieInfoDetails>
        <MovieInfoSubTitle>Overview </MovieInfoSubTitle>
        <MovieInfoDetails>{overview}</MovieInfoDetails>
        <MovieInfoSubTitle>Genres</MovieInfoSubTitle>
        <MovieInfoDetails>
          {genres.map(genre => genre.name).join(', ')}
        </MovieInfoDetails>
      </MovieInfoWrapper>
    </MovieInfoContainer>
  );
};

MovieInfo.propTypes = {
  original_title: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
};

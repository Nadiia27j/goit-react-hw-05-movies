import PropTypes from 'prop-types';


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

  </MovieInfoContainer>
    )
}
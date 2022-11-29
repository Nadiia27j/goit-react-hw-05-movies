import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { ReviewsItem,  ReviewsAuthor, ReviewsText} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
    .then(setReviews)
    .catch(error => console.log(error))
  }, [movieId]);

  if (reviews.length === 0) {
    return "We don't have any reviews for this movie.";
  }


  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
         <ReviewsItem key={id}>
            <ReviewsAuthor>Author: {author}</ReviewsAuthor>
            <ReviewsText>{content}</ReviewsText>
         </ReviewsItem>
      ))}
    </ul>
  );
};

export default Reviews;

import { fetchMovieReviews } from 'API/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from './Reviews.module.css';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(response => {
        setReviews(response.results);
      })
      .catch(error => error);
  }, [movieId]);
  return reviews?.length > 0 ? (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <p>
            Autor: <span>{review.author}</span>
          </p>
          <p> {review.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p className={css.attention}>We don't have reviews</p>
  );
};

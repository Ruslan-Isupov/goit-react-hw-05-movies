import { fetchMovieCast } from 'services/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId)
      .then(response => {
        setCast(response.cast);
      })
      .catch(error => error);
  }, [movieId]);

  return (
    <ul>
      {cast?.map(cast => {
        return (
          <li key={cast.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${
                cast?.profile_path
                  ? cast?.profile_path
                  : 'o1fDxkAnyGCU9Fs2jfUHHzfXXiS.jpg'
              }`}
              alt={cast.name}
              width={100}
              height={150}
            />
            <p> {cast.name}</p>
            <p> Character: {cast.character?cast.character:"Without information"}</p>
          </li>
        );
      })}
    </ul>
  );
};

import { useEffect, useState } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { fetchTrendingMovies } from 'services/api';

const HomePage = () => {
  const [movieList, setMovielist] = useState([]);
  useEffect(() => {
    fetchTrendingMovies()
      .then(film => setMovielist(film))
      .catch(error => error);
  }, []);

  return (
    <>
      <MovieList films={movieList} />
    </>
  );
};
export default HomePage;

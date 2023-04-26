import { SearchFilmForm } from 'components/SearchFilmForm/SearchFilmForm';
import { fetchSearchMovie } from 'API/api';
import { useState,useEffect } from 'react';
import { SearchMovieList } from 'components/SearchMovieList/SearchMovieList';
import { useSearchParams } from 'react-router-dom';

 const MoviesPage = () => {
  const [filmListOfSearch, setfilmListOfSearch] = useState('');
  const [useParam] = useSearchParams()
 const queryName = useParam.get("query")

   
   useEffect(() => {
   if(!queryName) return
   fetchSearchMovie(queryName).then(film => setfilmListOfSearch(film)).catch(error => error);
  },[queryName]);

  return (
    <>
      <SearchFilmForm  />
      {filmListOfSearch && <SearchMovieList listOfFilm={filmListOfSearch} />}
    </>
  );
};
export default MoviesPage
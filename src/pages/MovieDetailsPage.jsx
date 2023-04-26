import { Outlet, useParams } from 'react-router-dom';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { fetchMovieDetails } from 'API/api';
import { useEffect, useState } from 'react';
import { AdditionalInformation } from 'components/AdditionalInformation/AdditionalInformation';

const MovieDetailsPage = () => {
  const [filmDetails, setFilmDetails] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(filmDetails => {
        setFilmDetails(filmDetails);
      })
      .catch(error => error);
  }, [movieId]);

  return (
    <>
      {filmDetails && <MovieDetails filmDetails={filmDetails} />}

      <AdditionalInformation />
      <Outlet />
    </>
  );
};
export default MovieDetailsPage;

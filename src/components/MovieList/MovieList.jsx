import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export const MovieList = ({ films }) => {
  const location = useLocation();
  return (
    <>
      <h2 className={css.title}>Trending Today</h2>
      <ul className={css.movieList}>
        {films &&
          films.map(film => (
            <li key={film.id}>
              {' '}
              <NavLink to={`movies/${film.id}`} state={{ from: location }}>
                {film.title ? film.title : film.name}
              </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from './SearchMovieList.module.css';

export const SearchMovieList = ({ listOfFilm }) => {
  const location = useLocation();

  return (
    <ul className={css.searchMovieList}>
      {listOfFilm &&
        listOfFilm.map(film => (
          <li key={film.id}>
            {' '}
            <NavLink to={`${film.id}`} state={{ from: location }}>
              {film.title}
            </NavLink>
          </li>
        ))}
    </ul>
  );
};

SearchMovieList.propTypes = {
  listOfFilm: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

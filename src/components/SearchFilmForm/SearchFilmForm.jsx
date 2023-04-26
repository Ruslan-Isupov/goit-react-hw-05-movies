import { useSearchParams } from 'react-router-dom';
import css from "./SearchFilmForm.module.css"

export const SearchFilmForm = () => {
  const [, setSearchParams] = useSearchParams();
  // const query = searchParams.get("query");
  const submitSeatch = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <form onSubmit={submitSeatch}>
      <input className={css.inputFilm} type="text" name="query" />
      <button className={css.buttonForm} type="submit">Search</button>
    </form>
  );
};

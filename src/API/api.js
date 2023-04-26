const KEY = 'e719831ac7cf8ee7337874baf722825d';
const BASE_URL = 'https://api.themoviedb.org/3';
export function fetchTrendingMovies() {
  return fetch(`${BASE_URL}/trending/all/day?api_key=${KEY}`)
    .then(data => data.json())
    .then(films => films.results);
}

export function fetchSearchMovie(query) {
  return fetch(`${BASE_URL}/search/movie?api_key=${KEY}&query=${query}`).then(
    data => data.json().then(films => films.results)
  );
}

export function fetchMovieDetails(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}?api_key=${KEY}`).then(data =>
    data.json().then(films => films)
  );
}

export function fetchMovieCast(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`).then(
    data => data.json()
  );
}

export function fetchMovieReviews(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`).then(
    data => data.json()
  );
}

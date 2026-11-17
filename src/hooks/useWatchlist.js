import { useEffect, useState } from "react";

const STORAGE_KEY = "movie_world_watchlist_v1";

export const getMovieKey = (movie) =>
  movie.imdbId || `${movie.title}-${movie.year || "unknown"}`;

const readWatchlist = () => {
  try {
    const storedMovies = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(storedMovies)
      ? storedMovies.filter(
          (movie) => movie && typeof movie.title === "string" && movie.title,
        )
      : [];
  } catch {
    return [];
  }
};

const useWatchlist = () => {
  const [movies, setMovies] = useState(readWatchlist);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
    } catch {
      // Keep the in-memory list usable when browser storage is unavailable.
    }
  }, [movies]);

  const addMovie = (movie) => {
    setMovies((currentMovies) => {
      const movieKey = getMovieKey(movie);
      const alreadySaved = currentMovies.some(
        (savedMovie) => getMovieKey(savedMovie) === movieKey,
      );

      return alreadySaved ? currentMovies : [movie, ...currentMovies];
    });
  };

  const removeMovie = (movieKey) => {
    setMovies((currentMovies) =>
      currentMovies.filter((movie) => getMovieKey(movie) !== movieKey),
    );
  };

  const isSaved = (movie) =>
    movies.some((savedMovie) => getMovieKey(savedMovie) === getMovieKey(movie));

  return { movies, addMovie, removeMovie, isSaved };
};

export default useWatchlist;

const OMDB_API_URL = "https://www.omdbapi.com/";

const cleanValue = (value) => (value && value !== "N/A" ? value : "");

const normalizeMovie = (movie) => ({
  title: cleanValue(movie.Title) || "Untitled movie",
  year: cleanValue(movie.Year),
  rated: cleanValue(movie.Rated),
  runtime: cleanValue(movie.Runtime),
  genres: cleanValue(movie.Genre)
    .split(",")
    .map((genre) => genre.trim())
    .filter(Boolean),
  plot: cleanValue(movie.Plot) || "No plot summary is available.",
  rating: cleanValue(movie.imdbRating),
  poster: cleanValue(movie.Poster),
  imdbId: cleanValue(movie.imdbID),
  type: cleanValue(movie.Type) || "Movie",
});

export const fetchMovieByTitle = async (title, signal) => {
  const apiKey = import.meta.env.VITE_OMDB_API_KEY?.trim();

  if (!apiKey) {
    throw new Error(
      "Add VITE_OMDB_API_KEY to .env.local, then restart the development server.",
    );
  }

  const query = new URLSearchParams({
    apikey: apiKey,
    t: title,
    plot: "full",
    r: "json",
  });

  const response = await fetch(`${OMDB_API_URL}?${query}`, { signal });

  if (!response.ok) {
    throw new Error("The movie service is unavailable. Please try again.");
  }

  const movie = await response.json();

  if (movie.Response === "False") {
    throw new Error(movie.Error || "No movie matched that title.");
  }

  return normalizeMovie(movie);
};

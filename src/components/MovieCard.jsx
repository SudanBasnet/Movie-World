const MovieCard = ({
  movie,
  isLoading,
  isSearchResult,
  isSaved,
  onAddMovie,
}) => {
  const metadata = [movie.year, movie.runtime, movie.rated].filter(Boolean);
  const detailsUrl = movie.imdbId
    ? `https://www.imdb.com/title/${movie.imdbId}/`
    : "#movie-search";

  return (
    <article className="movie-card" aria-busy={isLoading}>
      <div className="poster-wrap">
        {movie.poster ? (
          <img src={movie.poster} alt={`${movie.title} poster`} />
        ) : (
          <div className="poster-fallback">
            <span aria-hidden="true">MW</span>
            <small>Poster unavailable</small>
          </div>
        )}
        <span className="poster-label">
          {isSearchResult ? movie.type : "Spotlight"}
        </span>
      </div>

      <div className="movie-card-body">
        <p className="card-kicker">
          {isSearchResult ? "Movie found" : "Tonight's pick"}
        </p>
        <h2>{movie.title}</h2>

        {metadata.length > 0 && (
          <div className="movie-meta" aria-label="Movie details">
            {metadata.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        )}

        {movie.genres.length > 0 && (
          <div className="movie-genres" aria-label="Genres">
            {movie.genres.slice(0, 3).map((genre) => (
              <span key={genre}>{genre}</span>
            ))}
          </div>
        )}

        <p className="movie-description">{movie.plot}</p>

        <div className="movie-actions">
          <button
            className={`btn ${isSaved ? "btn-success" : "btn-danger"}`}
            type="button"
            disabled={isSaved || isLoading}
            aria-pressed={isSaved}
            onClick={() => onAddMovie(movie)}
          >
            <span aria-hidden="true">{isSaved ? "✓" : "+"}</span>
            {isSaved ? "Added to list" : "Add to list"}
          </button>
          <a
            className="movie-details-link"
            href={detailsUrl}
            {...(movie.imdbId && {
              target: "_blank",
              rel: "noreferrer",
            })}
          >
            {movie.imdbId ? "View on IMDb" : "Search a title"}
          </a>
        </div>
        <span className="movie-note">
          {movie.rating ? `★ ${movie.rating} IMDb` : "Featured film"}
        </span>
      </div>

      {isLoading && (
        <div className="movie-loading" role="status">
          <span className="spinner-border spinner-border-sm" aria-hidden="true" />
          <span>Searching the archive...</span>
        </div>
      )}
    </article>
  );
};

export default MovieCard;

import { getMovieKey } from "../hooks/useWatchlist";

const WatchlistPoster = ({ movie }) =>
  movie.poster ? (
    <img src={movie.poster} alt={`${movie.title} poster`} />
  ) : (
    <div className="saved-poster-fallback" aria-label="Poster unavailable">
      MW
    </div>
  );

const Watchlist = ({ movies, onRemoveMovie }) => (
  <section className="watchlist-section" id="your-list" aria-labelledby="list-title">
    <div className="container">
      <header className="watchlist-header">
        <div>
          <p className="watchlist-eyebrow">Saved for movie night</p>
          <h2 id="list-title">Your List</h2>
          <p>Keep the movies you want to come back to in one place.</p>
        </div>
        <span className="watchlist-count">
          {movies.length} {movies.length === 1 ? "movie" : "movies"}
        </span>
      </header>

      {movies.length === 0 ? (
        <div className="watchlist-empty">
          <span aria-hidden="true">+</span>
          <h3>Your list is ready</h3>
          <p>Search for a movie and choose “Add to list” to save it here.</p>
          <a href="#movie-search">Find a movie</a>
        </div>
      ) : (
        <div className="watchlist-grid">
          {movies.map((movie) => {
            const movieKey = getMovieKey(movie);

            return (
              <article className="saved-movie" key={movieKey}>
                <div className="saved-poster">
                  <WatchlistPoster movie={movie} />
                </div>
                <div className="saved-movie-body">
                  <p>{movie.type || "Movie"}</p>
                  <h3>{movie.title}</h3>
                  <span>{movie.year || "Year unavailable"}</span>
                  <div className="saved-movie-actions">
                    {movie.imdbId && (
                      <a
                        href={`https://www.imdb.com/title/${movie.imdbId}/`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        IMDb
                      </a>
                    )}
                    <button type="button" onClick={() => onRemoveMovie(movieKey)}>
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  </section>
);

export default Watchlist;

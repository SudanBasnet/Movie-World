const MovieCard = () => {
  const poster = "https://www.omdbapi.com/src/poster.jpg";

  return (
    <article className="movie-card">
      <div className="poster-wrap">
        <img src={poster} alt="Project Hail Mary movie poster" />
        <span className="poster-label">Spotlight</span>
      </div>

      <div className="movie-card-body">
        <p className="card-kicker">Tonight&apos;s pick</p>
        <h2>Project Hail Mary</h2>

        <div className="movie-meta" aria-label="Movie categories">
          <span>Science fiction</span>
          <span aria-hidden="true">•</span>
          <span>Adventure</span>
        </div>

        <p className="movie-description">
          A cinematic journey beyond the edge of the known universe.
        </p>

        <div className="movie-actions">
          <button className="btn btn-danger" type="button">
            View details
          </button>
          <span className="movie-note">Featured film</span>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;

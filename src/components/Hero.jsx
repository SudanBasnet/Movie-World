import MovieCard from "./MovieCard";

const Hero = () => {
  const poster = "https://www.omdbapi.com/src/poster.jpg";

  return (
    <main
      className="hero"
      id="top"
      style={{ "--hero-image": `url(${poster})` }}
    >
      <nav className="movie-navbar fixed-top" aria-label="Main navigation">
        <div className="container navbar-inner">
          <a className="movie-brand" href="#top" aria-label="Movie World home">
            <span className="brand-mark" aria-hidden="true">
              MW
            </span>
            <span>Movie World</span>
          </a>
          <span className="nav-tagline">Find your next watch</span>
        </div>
      </nav>

      <section className="container hero-shell" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="hero-eyebrow">
            <span aria-hidden="true" /> Curated movie discovery
          </p>
          <h1 id="hero-title">
            Find a story worth <em>watching.</em>
          </h1>
          <p className="hero-copy">
            Search by title and discover something memorable for your next
            movie night.
          </p>

          <form
            className="movie-search"
            role="search"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="visually-hidden" htmlFor="movie-search">
              Search for a movie
            </label>
            <span className="search-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="m21 21-4.35-4.35m2.35-5.4a7.75 7.75 0 1 1-15.5 0 7.75 7.75 0 0 1 15.5 0Z" />
              </svg>
            </span>
            <input
              id="movie-search"
              type="search"
              placeholder="Search movies, actors, genres..."
              autoComplete="off"
            />
            <button className="btn btn-danger search-button" type="submit">
              Search
            </button>
          </form>

          <div className="featured-block">
            <div className="section-label">
              <span>Featured tonight</span>
              <span className="section-line" aria-hidden="true" />
            </div>
            <MovieCard />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;

import { useEffect, useRef, useState } from "react";
import featuredMovie from "../data/featuredMovie";
import { fetchMovieByTitle } from "../services/omdb";
import MovieCard from "./MovieCard";

const Hero = () => {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState(featuredMovie);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const activeRequest = useRef(null);

  useEffect(() => () => activeRequest.current?.abort(), []);

  const handleSearch = async (event) => {
    event.preventDefault();
    const title = query.trim();

    if (!title) {
      setStatus("error");
      setMessage("Enter a movie title to start searching.");
      return;
    }

    activeRequest.current?.abort();
    const controller = new AbortController();
    activeRequest.current = controller;
    setStatus("loading");
    setMessage("");

    try {
      const result = await fetchMovieByTitle(title, controller.signal);
      setMovie(result);
      setStatus("success");
      setMessage(`Showing ${result.title}.`);
    } catch (error) {
      if (error.name === "AbortError") return;
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      if (activeRequest.current === controller) {
        activeRequest.current = null;
      }
    }
  };

  const heroPoster = movie.poster || featuredMovie.poster;
  const hasSearchResult = movie !== featuredMovie;

  return (
    <main
      className="hero"
      id="top"
      style={{ "--hero-image": `url(${heroPoster})` }}
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
            onSubmit={handleSearch}
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
              value={query}
              placeholder="Search by movie title..."
              autoComplete="off"
              onChange={(event) => setQuery(event.target.value)}
            />
            <button
              className="btn btn-danger search-button"
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Searching..." : "Search"}
            </button>
          </form>

          <p
            className={`search-feedback ${status === "error" ? "is-error" : ""}`}
            role={status === "error" ? "alert" : "status"}
            aria-live="polite"
          >
            {message}
          </p>

          <div className="featured-block">
            <div className="section-label">
              <span>{hasSearchResult ? "Search result" : "Featured tonight"}</span>
              <span className="section-line" aria-hidden="true" />
            </div>
            <MovieCard
              movie={movie}
              isLoading={status === "loading"}
              isSearchResult={hasSearchResult}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;

import "./App.css";
import Hero from "./components/Hero";
import Watchlist from "./components/Watchlist";
import useWatchlist from "./hooks/useWatchlist";

function App() {
  const { movies, addMovie, removeMovie, isSaved } = useWatchlist();

  return (
    <div className="wrapper">
      <Hero
        listCount={movies.length}
        onAddMovie={addMovie}
        isMovieSaved={isSaved}
      />
      <Watchlist movies={movies} onRemoveMovie={removeMovie} />
    </div>
  );
}

export default App;

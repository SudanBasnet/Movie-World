const MovieCard = () => {
  const Poster = "https://www.omdbapi.com/src/poster.jpg";
  return (
    <div className="container movie-card-item">
      <div className="row  border rounded text-dark p-3">
        <div className="col-md">
          <img className="img-fluid" src={Poster} alt="Movie poster" />
        </div>
        <div className="col-md">
          <h3>Movie Name</h3>
          <p>Imdb rating</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-warning">Drama</button>
            <button className="btn btn-info">Action</button>
          </div>
          <div className="d-grid mt-3">
            <button className="btn btn-danger">Action</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

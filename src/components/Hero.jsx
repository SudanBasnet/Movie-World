const Hero = () => {
  const movieStyle = {
    backgroundImage: `url(https://www.omdbapi.com/src/poster.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "60vh",
  };
  return (
    <div>
      <nav className="py-3 fg-danger fixed-top">
        <h2 className="container">Movie World</h2>
      </nav>
      <div
        className="hero d-flex justify-content-center align-items-center text-light"
        style={movieStyle}
      >
        <div className="hero-content">
          <div className="form-center">
            <div className="text-center">
              <h1>Search for your movies</h1>
              <p>
                find your favourite movies so that you can watch them with your
                friends or families
              </p>
            </div>
          </div>
          <div className="input-group my-5">
            <input
              type="text"
              className="form-control"
              placeholder="Search for your movie name"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-solid theme-danger"
              type="button"
              id="button-addon2"
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

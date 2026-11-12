const Hero = () => {
  return (
    <div>
      <nav className="py-3 fg-danger fixed-top">
        <h2 className="container">Movie World</h2>
      </nav>
      <div className="hero">
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
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { HiMiniStar } from "react-icons/hi2";
function Slider() {
  const [popular, setPopularMovies] = useState([]); //array of popular movies
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=10aa8884d12e462c2b99060d40fb6608"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <div>
      <Carousel
      showThumbs={false}
      autoPlay={true}
      transitionTime={3}
      infiniteLoop={true}
      showStatus={false}
    >
      {popular.map((movie) => (
        <Link className="posterContainer" to={`/Login`} >
          <div className="posterImage">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt="backdrop"
            />
          </div>
          <div className="posterImage__overlay">
            <div className="posterImage__title"> {movie.original_title} </div>
            <div className="posterImage__runtime">
              {movie.release_date}
              <span className="posterImage__rating">
                {movie.vote_average}
                <HiMiniStar style={{ color: "#FFD700", size:"18px" }}/>
                </span>
            </div>
            <div className="posterImage__description"> {movie.overview} </div>
          </div>
        </Link>
      ))}
    </Carousel>
    </div>
  );
}

export default Slider;

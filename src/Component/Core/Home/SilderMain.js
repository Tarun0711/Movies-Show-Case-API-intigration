import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SilderMain.css"
import { HiMiniStar } from "react-icons/hi2";


const Slider = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => setPopularMovies(data.results));
  }, []);


  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      transitionTime={3}
      infiniteLoop={true}
      showStatus={false}
    >
      {popularMovies.map((movie) => (
        <div className="posterContainer" >
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
                <HiMiniStar style={{"color": "#ffcc00", "size":"18px"}}/>
              </span>
            </div>
            <div className="posterImage__description"> {movie.overview} </div>

           <Link to={`/movie/${movie.id}`} key={movie.id}><button className="button"  >Know More</button></Link>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;

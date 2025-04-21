import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movie.css";
import { HiMiniStar } from "react-icons/hi2";


const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, []);

  return (
    <div className="movie">
      <div className="movie__intro">
        <img
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt=""
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
            />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name"> {movie.original_title} </div>
            <div className="movie__tagline"> {movie.tagline} </div>
            <div className="movie__rating">
              <span className="movie__votecount">{movie.vote_count}<HiMiniStar />
</span>
            </div>
            <div className="movie__runtime">{movie.runtime} mins</div>
            <div className="movie__releaseDate">
              Release date: {movie.release_date}{" "}
            </div>
            <div className="movie__genres">
              {movie && movie.genres &&
                movie.genres.map((genre) => (
                  <span className="movie__genre" key={genre.id}>
                    {genre.name}
                  </span>
                ))}
            </div>
          </div>
          <div className="movie__detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div>{movie.overview}</div>
          </div>
        </div>
      </div>
      <div className="movie__heading">Production Companies</div>
    </div>
  );
};

export default MoviePage;

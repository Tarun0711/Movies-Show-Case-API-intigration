import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card"
import "./movie-list.css";

const MovieList = () => {
  const { type } = useParams();
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getDetails();
  }, [type]);

  const getDetails = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "upcoming"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setMovieList(data.results));
  };

  return (
    <div className="movie__list">
      <h2 className="list__title" >{(type ? type : "Upcoming").toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

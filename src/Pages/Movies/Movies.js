import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cardmain from "../../Component/Core/Main/Cardmain";
import "./Movies.css";

const Movies = () => {
  const { type } = useParams();
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getDetails();
  }, [type]);

  const getDetails = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setMovieList(data.results));
  };

  return (
    <div className="Main_movie__list">
      <h2 className="Main_list__title" >{(type ? type : "Movies").toUpperCase()}</h2>
      <div className="Main_list__cards">
        {movieList.map((movie) => (
          <Cardmain movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Movies;

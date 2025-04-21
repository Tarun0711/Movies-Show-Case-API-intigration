import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../Common/Logo";
// import SwitchButton from "../../Common/SwitchButton";
const Navbar = () => {
  return (
    <div className="header">
      <div className="headerRight">
        {/* <SwitchButton/> */}
        <Link to={"/mainpage"}>
          <Logo />
        </Link>
      </div>
      <div className="headerLeft">
      <Link to="/search">
          <span>Search</span>
        </Link>
        <Link to="/movies">
          <span>Movie</span>
        </Link>

        <Link to="/tv">
          <span>Tv</span>
        </Link>
        <Link to={"/mainpage/movies/popular"}>
          <span>Popular</span>
        </Link>
        <Link to={"/mainpage/movies/top_rated"}>
          <span>Top Rated</span>
        </Link>
        <Link to={"/mainpage/movies/upcoming"}>
          <span>Upcoming</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import Navbar from "../Component/Core/Main/Navbar";
import SliderMain from "../Component/Core/Home/SilderMain";
import MovieList from "../Component/Core/Main/MovieList";
import TopRated from "../Component/Core/Main/TopRated";
import Upcoming from "../Component/Core/Main/Upcoming";

function MainPage() {
  return (
    <div style={{ display: "block" }}>
      <div>
        <Navbar />
        <SliderMain />
        <MovieList />
        <TopRated />
        <Upcoming />
      </div>
      <div>
      {/* <Footer /> */}
      </div>
    </div>
  );
}

export default MainPage;

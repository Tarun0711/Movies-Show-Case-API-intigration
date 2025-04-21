import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import MainPage from './Pages/MainPage'
import Movie from "./Component/Core/Main/Movie"
import MovieList from './Component/Core/Main/MovieList'
import Movies from './Pages/Movies/Movies'
import Tv from "./Pages/Tv/Tv"
import Search from './Pages/Search'

function App() {
  return (
    <div className='Body'>
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/mainpage' element={<MainPage/>}/>
        <Route path="movie/:id" element={<Movie />} />
        <Route path="movies/:type" element={<MovieList />} />
        <Route path="/movies" element={<Movies/>}/>
        <Route path='/tv' element={<Tv/>}/>
        <Route path='/search' element={<Search/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App
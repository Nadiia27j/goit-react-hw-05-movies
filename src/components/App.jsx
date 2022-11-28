import { Routes, Route, Link } from "react-router-dom";
import Home from "path/to/pages/Home";
import Movies from "path/to/pages/About";
import  MovieDetails  from "path/to/pages/MovieDetails";
import Cast from 'path/to/pages/Cast';
import Reviews from 'path/to/pages/Reviews';


export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/movies" element={<Movies />}/>
      <Route path="/movies/:movieId" element={<MovieDetails />}/>
      <Route path="/movies/:movieId/cast" element={<Cast />} />
      <Route path="movies/:movieId/reviews" element={<Reviews />}/>
     </Routes>
    </div>
  );
};

import { Routes, Route, Link } from "react-router-dom";
import Home from "path/to/pages/Home";
import Movies from "path/to/pages/About";
import { MovieDetails } from "./MovieDetails/MovieDetails";

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
      <Route path="/movies/:moviesId" element={<MovieDetails />}/>
     </Routes>
    </div>
  );
};

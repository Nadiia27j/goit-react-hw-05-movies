import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from 'path/to/pages/Home';
import Movies from 'path/to/pages/Movies';
import MovieDetails from 'path/to/pages/MovieDetails';
import Cast from 'path/to/pages/Cast';
import Reviews from 'path/to/pages/Reviews';
import NotFound from 'path/to/pages/NotFound';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

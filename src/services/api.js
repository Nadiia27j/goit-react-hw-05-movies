import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
    api_key: 'd2d971f07eb4244bef9c04c57e6caf75',
    language: 'en-US',
};

export const getTrendingMovies = async () => {
    const response = await axios.get(`/trending/movie/day`);
    return response.data.results;
};

export const searchMovie = async query => {
    const response = await axios.get(`/search/movie?query=${query}`);
    return response.data.results;
};

export const getMovieDetails = async movieId => {
    const response = await axios.get(`/movie/${movieId}`);
    console.log(response);
    return response.data;
   
};

export const getMovieCast= async movieId => {
    const response = await axios.get(`/movie/${movieId}/credits`);
    return response.data.cast;
};

export const getMovieReviews  = async movieId => {
    const response = await axios.get(`/movie/${movieId}/reviews`);
    return response.data.results;
};
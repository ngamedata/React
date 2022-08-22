import axios from "axios";
const API_ENDPOINT = "http://www.omdbapi.com/?apikey=471503a3";
export const fetchMovies = async (movieName) =>
  axios.get(`${API_ENDPOINT}&s=${movieName}`);
export const fetchMovie = async (movieId) =>
  axios.get(`${API_ENDPOINT}&i=${movieId}`);

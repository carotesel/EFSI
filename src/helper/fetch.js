import axios from "axios";
const apiKey = '13d84b90cb476a717b73b72950066c86';

export const getPopularMovies = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1}`);
    return res.data;
}

export const getTrendingMovies = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`);
    return res.data;
}

export const getUpcomingMovies = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
    return res.data;
}
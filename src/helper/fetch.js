import axios from "axios";
const apiKey = '13d84b90cb476a717b73b72950066c86';


export const getPopular = async (filtro) => {
    const res = await axios.get(`https://api.themoviedb.org/3/${filtro}/popular?api_key=${apiKey}&language=en-US&page=1`);
    return res.data;
}

export const getTrending = async (filtro) => {
    const res = await axios.get(`https://api.themoviedb.org/3/trending/${filtro}/week?api_key=${apiKey}`);
    return res.data;
}

export const getById = async (id, category) => {
    const res = await axios.get(`https://api.themoviedb.org/3/${category}/${id}?api_key=${apiKey}&language=es`);
    return res.data;
} 

export const searchData = async (input) => {
    const m = []
    const movies = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${input}&page=1`);
    const series = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${input}&page=1`);
    m.push(movies.data)
    m.push(series.data)
    return m;
}


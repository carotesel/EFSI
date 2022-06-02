import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import Slider from './components/card-slider.js';
import axios from 'axios';
import {getPopularMovies, getTrendingMovies, getUpcomingMovies} from './helper/fetch.js'



const App = () => {

    
    const [popularMov, setPopularMov] = useState([]);
    const [trendingMov, setTrendingMov] = useState([]);
    const [upcomingMov, setUpcomingMov] = useState([]);


    useEffect(() => {
        (async () => {
            const movies = await getPopularMovies();
            setPopularMov(movies);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const movies = await getTrendingMovies();
            setTrendingMov(movies);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const movies = await getUpcomingMovies();
            setUpcomingMov(movies);
            console.log(movies);
        })();
    }, []);

    return (
        <>
            <Navbar />
            {popularMov.results &&

                <Slider peliculas={popularMov.results} tipoPelis='Populares' />
            }

            {trendingMov.results &&

                <Slider peliculas={trendingMov.results} tipoPelis='En cartelera' />
            }

            {upcomingMov.results &&

                <Slider peliculas={upcomingMov.results} tipoPelis='Próximamente' />
            }

            <Footer />
        </>
    )
}

export default App;

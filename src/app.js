import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import Slider from './components/card-slider.js';
import { getPopular, getTrending } from './helper/fetch.js';


const App = () => {


    const [popular, setPopular] = useState([]);
    const [trending, setTrending] = useState([]);

    const [popularActive, setPopularActive] = useState('tv')
    const [trendingActive, setTrendingActive] = useState('tv')

    useEffect(() => {
        (async () => {
            const movies = await getPopular(popularActive);
            setPopular(movies);
        })();
    }, [popularActive]);

    useEffect(() => {
        (async () => {
            const movies = await getTrending(trendingActive);
            setTrending(movies);
        })();
    }, [trendingActive]);

    const handleFiltro = (value, filter) => {
        console.log(value);
        // setFiltro(value);
        filter === 'popular' ? setPopularActive(value) :
            filter === 'trending' && setTrendingActive(value)
    }


    return (
        <>
            <Navbar />
            {popular.results &&

                <Slider peliculas={popular.results} tipoPelis='Lo + popular' handleFiltro={handleFiltro} active={popularActive} type='popular' />
            }

            {trending.results &&

                <Slider peliculas={trending.results} tipoPelis='Lo último' handleFiltro={handleFiltro} active={trendingActive} type='trending' />
            }


            <Footer />
        </>
    )
}

export default App;

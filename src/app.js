import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Slider from './components/Slider.js';
import { getPopular, getTrending, searchData } from './helper/fetch.js';
import Card from './components/Card.js';


const App = () => {


    const [popular, setPopular] = useState([]);
    const [trending, setTrending] = useState([]);

    const [popularActive, setPopularActive] = useState('movie')
    const [trendingActive, setTrendingActive] = useState('movie')
    const [searchMovies, setSearchMovies] = useState([])
    const [searchSeries, setSearchSeries] = useState([])


    const [find, setFind] = useState('');

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

   const handleInput = (e) => {
        setFind(e.target.value);
    }

    const handleSearch = async () => {
        const result = await searchData(find);  
        setSearchMovies(result[0].results)
        setSearchSeries(result[1].results);
    }

    
    console.log(find);

    const handleFiltro = (value, filter) => {
        console.log(value);
        // setFiltro(value);
        filter === 'popular' ? setPopularActive(value) :
            filter === 'trending' && setTrendingActive(value)
    }

    return (
        <>
            <Navbar handleInput={handleInput} handleSearch={handleSearch}/>

            {
                (searchMovies.length >= 1) ? (
                    <>
                        <div className="ml-5 sl mt-1 mb-5">
                            <h2>Peliculas</h2>
                            <div className="slider mb-4 ml-4 ml-5">
                                {searchMovies.map((peli) => {
                                    return (
                                        <Card peli={peli} filtro='movie'/>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="ml-5 sl mt-1 mb-5">
                            <h2>Movies</h2>
                            <div className="slider mb-4 ml-4 ml-5">
                                {searchSeries.map((serie) => {
                                    return (
                                        <Card peli={serie} filtro='tv'/>
                                    )
                                })}
                            </div>
                        </div>
                    </>
                ) : (

                    <>
                        {popular.results &&
            
                            <Slider peliculas={popular.results} tipoPelis='Lo + popular' handleFiltro={handleFiltro} active={popularActive} type='popular' />
                        }
            
                        {trending.results &&
            
                            <Slider peliculas={trending.results} tipoPelis='Lo último' handleFiltro={handleFiltro} active={trendingActive} type='trending' />
                        }
                    </>
                )

            }



            <Footer />
        </>
    )
}

export default App;

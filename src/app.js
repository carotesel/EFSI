import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Slider from './components/Slider.js';
import { getPopular, getTrending, searchData } from './helper/fetch.js';
import Card from './components/Card.js';
import './index.css';


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

    const handleGetBack = () => {
        setSearchMovies([]); 
        console.log(searchMovies);
    document.getElementById("limpiar_input").value="";
    }

    return (
        <>
            <Navbar handleInput={handleInput} handleSearch={handleSearch} />
            

            {
                (searchMovies.length >= 1) ? (
                    
                    <>
                        <button onClick={handleGetBack} className="button-style"><img src="https://i.pinimg.com/originals/f4/7f/d1/f47fd1fdc887f5cec9f3f2318c3c8313.png" className="house-style"></img></button>
                        
                        <div className="ml-5 sl mt-1 mb-5">
                            <h1 className="mt-5 text-center">Peliculas</h1>
                            <div className="slider mb-4 ml-4 ml-5">
                                {searchMovies.map((peli) => {
                                    return (
                                        <Card peli={peli} filtro='movie' />
                                    )
                                })}
                            </div>
                        </div>

                        <div className="ml-5 sl mt-1 mb-5">
                            <h1 className="mt-5 text-center">Series</h1>
                            <div className="slider mb-4 ml-4 ml-5">
                                {searchSeries.map((serie) => {
                                    return (
                                        <Card peli={serie} filtro='tv' />
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

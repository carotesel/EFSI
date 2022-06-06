import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import Slider from './components/card-slider.js';
import { getPopular, getTrending } from './helper/fetch.js';


const App = () => {

    
    const [popular, setPopular] = useState([]);
    const [trending, setTrending] = useState([]);
    const [filtro, setFiltro] = useState('movie');
   

    useEffect(() => {
        (async () => {
            const movies = await getPopular(filtro);
            setPopular(movies);
        })();
    }, [filtro]);

    useEffect(() => {
        (async () => {
            const movies = await getTrending(filtro);
            setTrending(movies);
        })();
    }, [filtro]);

  
    const handleFiltro = (value) => {  
        console.log(value);
        setFiltro(value);
    }
    

    return (
        <>
            <Navbar />
            {popular.results &&

                <Slider peliculas={popular.results} tipoPelis='Lo + popular' handleFiltro={handleFiltro}/>
            }

            {trending.results &&

                <Slider peliculas={trending.results} tipoPelis='Lo último' handleFiltro={handleFiltro} />
            }


            <Footer />
        </>
    )
}

export default App;

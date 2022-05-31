import React, { useEffect, useState } from 'react'
import Navbar  from './components/navbar.js';
import Footer from './components/footer.js';
import Slider from './components/card-slider.js';
import axios from 'axios';


const App = () => {
    let buscados = ["Mas Buscados", "Tendencias", "Solo Cines"];

    const [popularMov, setPopularMov] = useState([]);
    

    const getPopularMovies = async () => {
        const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=13d84b90cb476a717b73b72950066c86&language=en-US&page=1");
        return res.data;
    }

    useEffect(()=>{
        (async ()=>{
          const movies = await getPopularMovies();
          setPopularMov(movies);
          console.log(movies);
        })();
      }, []);
    
    return (
        <>
            <Navbar/>
            {popularMov.results &&
            
            <Slider peliculas={popularMov.results} />
            }
            
    
            <Footer/>
        </>
    )
}

export default App

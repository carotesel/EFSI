import React from 'react'
import Navbar  from './components/navbar.js';
import Footer from './components/footer.js';
import CardSlider from './components/card-slider.js';
import axios from 'axios';


const App = () => {
    let buscados = ["Mas Buscados", "Tendencias", "Solo Cines"];
    
    return (
        <>
            <Navbar/>
            {
                buscados.map(buscado => (
                    <CardSlider titulo={buscado} />
                ))
            }            
    
            <Footer/>
        </>
    )
}

export default App

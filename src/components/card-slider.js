import React from "react";
import '../index.css';
import Card from './card.js';


const Slider = ({peliculas}) => {
    return (
        <div className="ml-5 sl mt-5 mb-5">
             <h2>Hola</h2>
            <div className="slider mb-4 ml-4 ml-5 mt-5">
                {peliculas.map((peli) => {
                    return(
                        <Card peli = {peli}/> 
                    )
                })}
            </div>
        </div>
    )
}
export default Slider;
import React from "react";
import '../index.css';
import Card from './card.js';

const Slider = ({titulo,peliculas}) => {
    return (
        <div className="ml-5 sl mt-5 mb-5">
             <h2>{titulo}</h2>
            <div className="slider mb-4 ml-4 ml-5 mt-5">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
export default Slider;
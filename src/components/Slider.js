import React,{useState} from "react";
import '../index.css';
import Card from './Card.js';
import Filtros from './Filtros.js'

const Slider = ({ peliculas, tipoPelis, handleFiltro, active, type }) => {
    const [filtro,setFiltro] = useState('movie');
    return (
        <>
            <h1 className="text-center">{tipoPelis}</h1>
            <Filtros handleFiltro={handleFiltro} active={active} type={type} setFiltro={setFiltro} />

            <div className="ml-5 sl mt-1 mb-5">
                <div className="slider mb-4 ml-4 ml-5">
                    {peliculas.map((peli) => {
                        return (
                            <Card peli={peli} filtro={filtro} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Slider;
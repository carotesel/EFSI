import React from 'react';


function Filter({ name, handleFiltro, filter, sx, type, setFiltro }) {
    const ProcesarClick = () =>{
        setFiltro(filter);
        handleFiltro(filter, type);
    };
    
    return (
        <button type="button" className={`btn mt-1 btnfilter-pelis ml-1 ${sx}`} filter={filter} onClick={() => ProcesarClick()}>{name}</button>
    )
}

export default Filter
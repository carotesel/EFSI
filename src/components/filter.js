import React from 'react';


function Filter({ name, handleFiltro, filter, sx, type }) {
    return (
        <button type="button" className={`btn mt-1 btnfilter-pelis ml-1 ${sx}`} filter={filter} onClick={() => handleFiltro(filter, type)}>{name}</button>
    )
}

export default Filter
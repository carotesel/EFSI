import React from 'react';


function Filter({name, handleFiltro, filter}) {
  return (
    <button type="button" className="btn mt-1 btnfilter-pelis ml-1" filter={filter} onClick={() => handleFiltro(filter)}>{name}</button>
  )
}

export default Filter
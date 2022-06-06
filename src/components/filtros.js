import React from 'react'
import Filter from './filter';

const Filtros = ({handleFiltro}) => {
    return(
        
        <div className='text-center mt-3'>
        <div className="row">
            <div className="col-md-12 col-12">
                <Filter filter='movie' name='Peliculas' handleFiltro={handleFiltro}/>
                <Filter filter='tv' name='Series' handleFiltro={handleFiltro}/>
            </div>
        </div>
        </div>
        
    );
}

export default Filtros;
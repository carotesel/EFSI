import React from 'react'
import Filter from './filter';

const Filtros = ({ handleFiltro, active, type }) => {

    return (
        <div className='text-center mt-3'>
            <div className="row">
                <div className="col-md-12 col-12">
                    <Filter filter='movie' name='Peliculas' handleFiltro={handleFiltro} type={type} sx={
                        active === 'movie' ? 'btnfilter-pelis-active' : 'btnfilter-pelis-inactive'
                    } />
                    <Filter filter='tv' name='Series' handleFiltro={handleFiltro} type={type} sx={
                        active === 'tv' ? 'btnfilter-pelis-active' : 'btnfilter-pelis-inactive'
                    } />
                </div>
            </div>
        </div>

    );
}

export default Filtros;
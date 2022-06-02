import React from 'react'

const Filtro = () => {
    return(
        
        <div className='text-center mt-3'>
        <div className="row">
            <div className="col-md-12 col-12">
                <button type="button" className="btn  btnfilter-pelis mt-1">Peliculas</button>
                <button type="button" className="btn  mt-1 btnfilter-series ml-1">Series</button>
            </div>
        </div>
        </div>
        
    );
}

export default Filtro;
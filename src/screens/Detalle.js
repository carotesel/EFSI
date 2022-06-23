import '../index.css';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import { getById } from '../helper/fetch';
import '../index.css';
import Footer from '../components/Footer';




function Detalle(){
  let { id, category } = useParams(); 
  const [item, setItem] = useState(null);
  
  useEffect(() => {
    (async () => {
        const res = await getById(id, category);
        setItem(res);
    })();
  }, []);
console.log(item);

    return(
      item && <>
      <Navbar />
        <div className="container mt-5 mb-5">
          <div className="card big-card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <div class="hover13 column">
                <div>
                  <figure><img className='img-position' alt='fotoDetalle' src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}></img></figure>
                </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body mt-3">
              <h3 className="card-title ml-4 font-info">{item.original_title}{item.name}</h3>
              <h6 className="card-title ml-4 font-info">Genero:    {item.genres.map(genre => genre.name).join(",  ")}</h6>
              <p className="card-text ml-4 mt-4 vista-general font-info" >Vista General: {item.overview}</p>
              <p className="card-text ml-4 mt-4 vista-general font-info">Puntuación: {item.vote_average}</p>
              <p className="card-text ml-4 mt-4 vista-general font-info">Fecha de lanzamiento: {item.release_date}{item.first_air_date}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />

      </>
    );
}

export default Detalle;
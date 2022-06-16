import '../index.css';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import { getById } from '../helper/fetch';



function Detalle(){
  let { id,category } = useParams(); 
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
            <img className="mt-3 ml-3 mr-3 mb-3 img-fluid rounded-start" src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}  alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body mt-3">
              <h2 className="card-title ml-4">{item.original_title}</h2>
              <h6 className="card-title ml-4">{item.genres.map(genre => genre.name).join(",   ")}</h6>
              <p className="card-text ml-4 mt-4">Vista General:</p>
              <p className="card-text ml-4 mt-4">Puntuación:</p>
              <p className="card-text ml-4 mt-4">Puntuación:</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </>
    );
}

export default Detalle;
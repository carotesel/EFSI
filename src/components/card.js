import React from 'react'
import {Link} from "react-router-dom";


const Card = ({peli,filtro}) => {
  return (
    <div className=" slide mb-5">
     
      <Link to={`/${filtro}/${peli.id}`}>
      <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${peli.poster_path}`}  className="card__image" alt="" />      
      </Link>
    <h3 className="card__title mt-3 ml-2">{peli.title}</h3>  
    <h1>{filtro}</h1>
</div>
  );
}

export default Card;

// src={`https://image.tmdb.org/t/p/w220_and_h330_face${peli.backdrop_path}`} 
import React from 'react'
import {Link} from "react-router-dom";


const card = ({peli}) => {
  return (
    <div className=" slide mb-5">
     
      <Link to={`/${peli.id}`}>
      <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${peli.poster_path}`}  className="card__image" alt="" />      
      </Link>
    <h3 className="card__title mt-3 ml-2">{peli.title}</h3>  
</div>
  );
}

export default card;

// src={`https://image.tmdb.org/t/p/w220_and_h330_face${peli.backdrop_path}`} 
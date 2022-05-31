import React from 'react'

const card = ({peli}) => {
  return (
    <div className=" slide mb-5">
    <a href="" className="card">
      <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${peli.poster_path}`}  className="card__image" alt="" />
                
    </a>      
    <h3 className="card__title mt-3 ml-2">{peli.title}</h3>  
</div>
  );
}

export default card

// src={`https://image.tmdb.org/t/p/w220_and_h330_face${peli.backdrop_path}`} 
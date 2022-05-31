import React from 'react'

const card = ({peli}) => {
  return (
    <div className=" slide mb-5">
    <a href="" className="card">
      <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${peli.poster_path}`}  className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path/></svg>                     
          <div className="card__header-text">
            <h3 className="card__title">{peli.title}</h3>            
          </div>
        </div>
        <p className="card__description">Viva Perón</p>
      </div>
    </a>      
</div>
  );
}

export default card

// src={`https://image.tmdb.org/t/p/w220_and_h330_face${peli.backdrop_path}`} 
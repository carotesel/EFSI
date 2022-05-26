import React from 'react'

export default function card() {
  return (
    <div className=" slide mb-5">
    <a href="" className="card">
      <img src="https://media.a24.com/p/bb6bff9235abf980cc35a621fc937264/adjuntos/296/imagenes/008/555/0008555645/1200x900/smart/metegol-netflixpng.png" className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path/></svg>                     
          <div className="card__header-text">
            <h3 className="card__title">Metegol</h3>            
          </div>
        </div>
        <p className="card__description">Viva Perón</p>
      </div>
    </a>      
</div>
  );
}

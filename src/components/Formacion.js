import React from 'react';
import {estudios} from '../data/estudios';
import { Carousel } from './carrusel/Carousel';

//const recursos = require.context('../assets', true);


export const Formacion = () => {   

  return (
    < >
      <Carousel />
        <div className="container-fluid animate__animated animate__fadeIn ">
          <div className="card-group ">
            <div className="card fondoFormacion row mt-5 "> 
              {
              estudios.map( ({id, nombre, fecha}) =>( 
                <div className="card-body bordeFormacion mt-5 col ">
                  <h5 key={id} className="card-title marginInt">{nombre}</h5>
                  <footer className="card-footer marginIntParrafo ">{fecha}</footer>
                
                </div>
              ))}

              </div>
          </div>
        </div>
   
  </>  
  );
};

import React from 'react';
import {estudios} from '../data/estudios';
import { Carousel } from './carrusel/Carousel';

const recursos = require.context('../assets', true);


export const Formacion = () => {   

  return (
    < >
      <div className="row gx-5 animate__animated animate__fadeIn">
      <Carousel />
        
        <div className="col me-5 ">
        <img
              src={recursos(`./libros.webp`)}
              className="img-fluid animate__animated animate__zoomIn animate__slower mt-5"
              alt="presentacion"
              />
        </div>
        <div className="col fs-5 lh-lg animate__animated  animate__headShake mt-5 p-8">
          <ul >            

            {
              estudios.map(({id, nombre, fecha}) =>( <li key={id} className="centrado" > {nombre}<br/> {fecha} </li> ))
            }

            </ul>
        </div>
      </div>
        
   
  </>  
  );
};
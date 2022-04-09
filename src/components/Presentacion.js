import React from 'react';


const recursos = require.context('../assets', true);

export const Presentacion = () => {
  return (
    <div className="container-fluid ">
        <div className="  row gx-5 animate__animated animate__fadeIn">
          <div className="col fs-5 lh-lg centrado">
            <p className="colocacion  animate__animated  animate__headShake p-8  ">
              ¡Hola! Esta es mi web personal, aqui intento aplicar lo aprendido en los ultimos meses.<br/> Esta hecha desde cero, hay React, un poquito de javascript, y para los estilos, CSS, SASS y Boostrap 5. <br/>  Sigo formándome e implementado más y más cosas. <br/>Espero que te guste.
            </p>
          </div>
          <div className="col fs-2 lh-lg">
            <img
              src={recursos(`./bombilla_responsabilidad.webp`)}
              className="img-fluid animate__animated animate__zoomIn animate__slower tamaño"
              alt="presentacion"
              />
          </div>
        </div>
        
    </div>
    );
};

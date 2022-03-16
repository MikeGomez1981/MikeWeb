import React from 'react';


const recursos = require.context('../assets', true);

export const Presentacion = () => {
  return (
    <div className="container-fluid ">
        <div className="  row gx-5">
          <div className="col fs-5 lh-lg centrado">
            <p className="colocacion  animate__animated  animate__headShake p-8  ">
              Esta es mi web personal, aqui intento aplicar lo aprendido en los ultimos meses.<br/> Esta hecha desde cero, he utilizado React, un poquito de javascript, y para los estilos, CSS, SASS y Boostrap 5. <br/>Sigo estudiando e implementado más y más cosas. Espero que te guste.
            </p>
          </div>
          <div className="col fs-2 lh-lg">
            <img
              src={recursos(`./bombilla_responsabilidad.png`)}
              className="animate__animated animate__zoomIn animate__slower "
              alt="presentacion"
              />
          </div>
        </div>
        
    </div>
    );
};

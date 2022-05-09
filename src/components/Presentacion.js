import React, {useState} from 'react';

const recursos = require.context('../assets', true);

export const Presentacion = () => {

  const [fixed, setFixed] = useState(false);
  

  return (
    <div className=" container-fluid paddingPresen d-flex justify-content-center">
      <div className="tamañoBombi animate__animated animate__swing animate__slower animate__infinite ">
        <img
          className= {`mtPresentacion tamañoPresen animate__animated animate__zoomIn  ${(fixed) && 'clas '} `}
          src={recursos(`./bombilla_responsabilidad.webp`)}
          alt="presentacion"
          onAnimationEnd={ ()=> setFixed(true) }
        />
      </div>
      {
        (fixed === true)&&
        <div className="backPresen mtPresentacion">
        <p 
        className="fs-5 lh-lg card-presentacion animate__animated  animate__fadeInUp ">
            ¡Hola! Esta es mi web personal, aqui intento aplicar lo aprendido en los ultimos meses.<br/> Esta hecha desde cero, hay React, un poquito de javascript, y para los estilos, CSS, SASS y Boostrap 5. <br/>  Sigo formándome e implementado más y más cosas. <br/>Espero que te guste.
        </p> 
        </div>           
      } 
         
          
    </div>
    );
};

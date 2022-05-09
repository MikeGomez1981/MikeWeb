
import React from 'react';
import { motion } from 'framer-motion';

const recursos = require.context('../assets/imagenes', true);

export const DataCard = ({
    id,
    name,
    version,
    puntuacion
}) => {
return (
      
        <motion.div whileHover={{ scale: 1.1 }}  className=" borde miniatura me-5 mb-5 mt-5 " >
            <div className="animate__animated animate__jello">
                <img 
                    src={recursos(`./${id}.webp`)}
                    alt={name} 
                    className="card-img tarjeta  "               
                />
                <div className="tamañoTexto card-text mt-5 fixed-bottom">
                    <div className="linea">
                        <p className="text-end me-3"> Versión:   <strong>{version}</strong></p>
                        <p className="text-end me-3"> Valoración:  { puntuacion }</p>
                    </div>
                    <div className=" abajo">
                        <div className="text-end me-3">{name}</div>
                    </div>    
                </div>
            </div>
        </motion.div>    
        
  )
}

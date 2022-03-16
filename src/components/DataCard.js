
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
      <div className="card me-5 mb-5 mt-5">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className="borde" >
            <img 
                src={recursos(`./${id}.png`)}
                alt={name} 
                className="card-img   "               
            />
            <div className=" card-text mt-5 fixed-bottom">
                <div className="linea">
                    <p className="text-end me-3"> Versión:   <strong>{version}</strong></p>
                    <p className="text-end me-3"> Valoración:  { puntuacion }</p>
                </div>
                <div className=" abajo">
                    <div className="text-end me-3">{name}</div>
                </div>    
            </div>
                  
            </motion.div>    
        </div> 
  )
}

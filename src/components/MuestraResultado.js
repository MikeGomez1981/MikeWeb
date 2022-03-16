
import React from 'react';

export const MuestraResultado = ({
    name='', 
    puntuacion, 
    version

}) => {
   

  return (
     <> 
      <table className="table table-striped Resultados container" >
         <tbody>
            <tr scope="row">           
               <td className="Resultados">{name}</td>
               <td className="Resultados">{puntuacion}</td>
               <td className="Resultados">{version}</td>
            </tr>
         </tbody>    
      </table>    
     </>   

  )
}

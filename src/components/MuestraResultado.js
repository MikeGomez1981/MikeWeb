
import React from 'react';

export const MuestraResultado = ({
   
   name='', 
   puntuacion, 
   version
}) => {
   

  return (
     
   <>               
      
         <tbody className="table table-responsive Resultados">
            <tr > 
               <td className="text-start">{name}</td>
               <td className="text-center">{puntuacion}</td>
               <td className="text-center">{version}</td>
            </tr>
         </tbody>    
       
   </>  

  )
}

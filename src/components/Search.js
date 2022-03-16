import React, { useMemo, useRef, useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../hooks/useForm';
import { getInfo } from '../selectors/getInfo';
import { MuestraResultado } from './MuestraResultado';
import { motion } from 'framer-motion';

export const Search = () => {
 
  const navigate = useNavigate();
  const location = useLocation();

  const {q= '' } = queryString.parse(location.search);
  
  const [ values, handleInputChange ] =useForm({
    searchText: q,
  });                               
  const {searchText} = values;
                                                                //VIDEO 183
  const aptitudesFiltradas = useMemo(() => getInfo(q), [q]);
  
  const handleSearch= (e)=>{
      e.preventDefault();
      navigate(`?q=${ searchText }`);
  }
  const constraintsRef = useRef(null);

  const className = 'animate__animated animate__bounceOut ';

  const [quitar, setquitar] = useState(false);
  
  const handleClose=()=>{    
    setquitar(true);        
  }
  
  return (
    <div className=" row row-cols-1 justify-content-center" 
      ref={constraintsRef} 
    >
      <motion.div 
        drag
        dragConstraints={constraintsRef}       
        className={`mt-5 mb-5 borde tamaño  ${ (quitar) &&  className }`}
        
      >
        <div className="superior">
          <i className="fas fa-times equis "
              onClick={handleClose}
          />
        </div>
            <div className="separado ">
              <h4 className="mt-1 pt-1 mb-3 ">
                ¿Quieres ver alguna aptitud en concreto?
              </h4>
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Buscar" 
                    className="form-control mb-3 formulario" 
                    name="searchText"
                    id="buscar" 
                    autoComplete="off"
                    value={searchText}
                    onChange={handleInputChange}
                  />                            
                    <button type="submit" className=" boton me-2">Buscar</button>
                </form>
        </div>        
      </motion.div>
        <div className="mt-5 col start-50 text-center mb-5">
          
         {
          aptitudesFiltradas.length !==0 && 
           <>
           <h4 className="mb-5 ">Resultados</h4>
            <table className="table table-striped Resultados container">
                <thead>
                  <tr>
                    <th scope="col">Aptitud</th>
                    <th scope="col">Puntuación</th>
                    <th scope="col">Versión</th>
                  </tr>
                </thead>
              </table>
          </>
          }
          {
            ( q ==='') 
              ? <div className="alert alert-secondary mt-5">Introduce alguna aptitud que quieras ver</div>
              : (  aptitudesFiltradas.length === 0 )  
                && <div className="alert alert-break mt-5">Pues va a ser que no encuentro esto: <strong>{q}</strong>  </div>                             
          }           
          {
            aptitudesFiltradas.map(data => (
              <MuestraResultado
                Key={data.id}
                    {...data} />))
          }
        </div>
      </div>
  );
};

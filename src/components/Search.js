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
  //console.log(aptitudesFiltradas)
  
  const handleSearch= (e)=>{
      e.preventDefault();
      navigate(`?q=${ searchText }`);
  }
  const constraintsRef = useRef(null);

  const className = 'animate__animated animate__bounceOut ';

  const [quitar, setQuitar] = useState(false);
  
  
  const handleClose= ()=>{ setQuitar(true) }
  
  return (
    
    <div className="  animate__animated animate__fadeIn " 
      ref={constraintsRef} 
    >
      <motion.div 
        drag
        dragConstraints={constraintsRef}       
        className={`mt-4 bordeSearch ${ (quitar) &&  className }`}
        onAnimationEnd= {  ()=> navigate('/')  } 
      >
        <div className="superior ">
          <i className="fas fa-times equis "
              onClick={handleClose}
          />
        </div>
            <p className="pt-1 text-center ms-2 me-2 ">
              ¿Quieres ver alguna aptitud en concreto?
            </p>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Buscar" 
                className="form-control formulario mt-2 mb-1" 
                name="searchText"
                id="buscar" 
                autoComplete="off"
                value={searchText}
                onChange={handleInputChange}
              />                            
              <button type="submit" className=" boton me-2 ">Buscar</button>
            </form>
        </motion.div>
            
         {
          aptitudesFiltradas.length !==0 && 
          <>
           <h4 className="  text-center mt-4 ">Resultados</h4>
            <table className="table table-responsive  Resultados ">
                <thead>
                  <tr>
                    <th scope="col" >Aptitud</th>
                    <th scope="col">Puntuación</th>
                    <th scope="col">Versión</th>
                  </tr>
                </thead>
                
              {
                aptitudesFiltradas.map(info => (
                    <MuestraResultado
                      Key={info.key}
                        {...info} />))
              }

              </table>
            </>
          }
          {
            ( q ==='') 
              ? <div className=" alert alert-secondary mt-5 text-center">Introduce alguna aptitud que quieras ver</div>
              : (  aptitudesFiltradas.length === 0 )  
                && <div className=" alert alert-break mt-5 text-center">Pues va a ser que no encuentro esto: <strong>{q}</strong>  </div>                             
          }           
        </div>
  );
};

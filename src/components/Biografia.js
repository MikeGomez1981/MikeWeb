import React ,{useState, useEffect} from 'react';
import bio from '../exports/bio/bio.txt';
import bio1 from '../exports/bio/bio1.txt';
import bio2 from '../exports/bio/bio2.txt';
import {Carousel}  from './carrusel/Carousel';

export const Biografia = () => {

  const [raw, setRaw] = useState('');
  const [raw1, setRaw1] = useState('');
  const [raw2, setRaw2] = useState('');
 
  useEffect(() => {
  
    fetch(bio)
      .then(r => r.text())
      .then(text =>{setRaw(text)} );
    fetch(bio1)
      .then(r => r.text())
      .then(text =>{setRaw1(text)} );
    fetch(bio2)
      .then(r => r.text())
      .then(text =>{setRaw2(text)} );
      return () =>{
        console.error('error')
      }
  }, []);

  const [over, setOver] = useState(false);
  const [over1, setOver1] = useState(false);
  const [over2, setOver2] = useState(false);

  
   
return (
  <>   
    <Carousel />
       
      <div className="d-flex justify-content-center container-fluid ">
        <div className="animate__animated animate__backInUp">  
          <div className="card-group">
            <div className="card fondo ms-4 me-4 mt-5 mb-5"> 
              <div className="card-body ">
                <h5 className="card-title mt-4 ms-4">Sobre mi</h5>
                <p className={`lh-lg mt-5 center overflow ${(over)&& 'overScroll' } `}>{raw}</p>
                <button 
                     className="botonNoStyle "
                    onClick={()=>{(over===false)?setOver(true):setOver(false)}}
                    href="#"
                    >Ver más...</button>
              </div>
            </div>
            
            <div className="card fondo ms-4 me-4 mt-5 mb-5"> 
              <div className="card-body radiusBio">
                <h5 className="card-title mt-4 ms-4">Objetivos</h5>
                 <p className={`lh-lg mt-5 center overflow ${(over1)&& 'overScroll' } `}>{raw1}</p>
                <button 
                    className="botonNoStyle"
                    onClick={()=>{(over1===false)?setOver1(true):setOver1(false)}}
                    href="#"
                    >Ver más...</button>
              </div>
            </div>

            <div className="card fondo ms-4 me-4 mt-5 mb-5"> 
              <div className="card-body ">
                <h5 className="card-title mt-4 ms-4">Qué puedo aportar</h5>
                <p className={`lh-lg mt-5 center overflow ${(over2)&& 'overScroll' } `}>{raw2}</p>
                <button 
                    className="botonNoStyle"
                    onClick={()=>{(over2===false)?setOver2(true):setOver2(false)}}
                    href="#"
                    >Ver más...</button>
              </div>
            </div>
          </div>
        </div>
      </div>  
  </>
  );
};

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
  
   
  }, [])
  
return (
    < div>
        
      <Carousel />
       
      <div className="animate__animated animate__backInUp">   
        <h1 className="mt-5 ">Sobre mi</h1>
          <p
            className="lh-lg mt-5 centrado"
            >{raw}</p> 
        <h1 className="mt-5">Objetivos</h1>
          <p
            className="lh-lg mt-5 centrado"
            >{raw1}</p>
        <h1 className="mt-5">Qué puedo aportar</h1>
          <p
            className="lh-lg mt-5 centrado"
            >{raw2}</p> 
      </div>
            
        
      </div>  
  
    );
};

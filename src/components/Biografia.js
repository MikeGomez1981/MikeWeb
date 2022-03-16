import React ,{useState} from 'react';
//import {images} from '../exports/images';
//import { Carrusel } from './carrusel/Carrusel';
 
import bio from '../exports/bio/bio.txt';
import bio1 from '../exports/bio/bio1.txt';
import bio2 from '../exports/bio/bio2.txt';
import {Carousel}  from './carrusel/Carousel';


export const Biografia = () => {

  const [raw, setRaw] = useState('');
  const [raw1, setRaw1] = useState('');
  const [raw2, setRaw2] = useState('');
        
  //<Carrusel images={images}/> 

  fetch(bio)
    .then(r => r.text())
    .then(text =>{setRaw(text)} );
  fetch(bio1)
    .then(r => r.text())
    .then(text =>{setRaw1(text)} );
  fetch(bio2)
    .then(r => r.text())
    .then(text =>{setRaw2(text)} );
  
return (
    < >
        
          <Carousel />
       
       
        <h1 className="mt-5">Sobre mi</h1>
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
 
            
        
      </>  
  
    );
};

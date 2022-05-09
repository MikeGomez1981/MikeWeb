
import  {ToastSearch}  from './ToastSearch';
import { data } from '../data/data';
import { DataCard } from './DataCard';
import {useState} from 'react';


export const Aptitudes = () => {

  const [open, setOpen ] = useState(false);

  const handleOpen = ()=>{ 
    setOpen(true);
  }
  const handleClose = ()=>{
    setOpen(false);
  }    
  return (
    <div className="marginApti" >
        
      {
        (open===true)&&
        <ToastSearch/>
      }
      <h5 onClick={handleOpen}
          className="cursor text-end mt-5"
          >  
            Busca en aptitudes 
        <i className="fas fa-search ms-3 me-2"> </i>      
      </h5> 
      <div 
        className=" "
        onClick={handleClose}>
      

      <div 
        className={`d-flex justify-content-center row mt-5 ${ (open===true) && 'fondoDifu'}`}
      >
      {
         
          data.map( dato => (   
            

            <DataCard
              key={dato.id}
              {...dato}
              />
            
            ))}  
            
    
      </div>
    </div>
    </div>
    );
};



import { data } from '../data/data';
import { Carousel } from './carrusel/Carousel';
import { DataCard } from './DataCard';


//const images = require.context('../assets', true);


export const Aptitudes = () => {
  
  return (
    < >
      <Carousel />
      <div className="justify-content-center row mt-5">
        {
          data.map( dato => (            
            <DataCard
              key={dato.id}
              {...dato}
            />
                
            ))}  
      </div>
    </>
    );
};
/* <img 
        src={ recursos(`./aptitudes.png`)}
        className="img-fluid"
        
      />*/
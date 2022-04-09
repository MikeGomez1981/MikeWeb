

import { data } from '../data/data';

import { DataCard } from './DataCard';

export const Aptitudes = () => {
  
  return (
    < >
    
      <div className="justify-content-center row mt-5 ">
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

import React from 'react';
import { Search } from './Search';
//import { motion} from "framer-motion";

export const ToastSearch = () => {
 
  return (
    

        <div className="toast toast-demo fade show tostaCentrada "  >     
            <div className="toast-body d-flex justify-content-center">
                <Search />
        
            </div>
        </div>
        
    
    
  )
}

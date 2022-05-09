import React,{useState, useRef} from 'react';
import {NavLink } from 'react-router-dom';
//import { motion } from 'framer-motion';
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";

const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };
  
export const Navbarr = () => {
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const [isOpen, toggleOpen] = useCycle(false, true);

    const [mostrar, setMostrar] = useState(false);
    
    const handleOpen=()=>{
        
        if(mostrar === true){
          setMostrar(false);
        }else {
          setMostrar(true);
        }
    }  
    
    return (
        <motion.nav 

            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
        >
        <motion.div 
          className="background position-fixed" 
          variants={sidebar}
          
          >
            
        {
            (mostrar!==false)&&
            
            <motion.ul>
              <NavLink 
                  className={ ({isActive}) => 'nav-link Letranavbar '+ (isActive ? ' active' : '') } 
                  to="/"
                  >
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                      Presentación
                  </motion.div>
              </NavLink>            
                          
              <NavLink 
                  className={ ({isActive}) => 'nav-link Letranavbar '+ (isActive ? ' active' : '') }  
                  to="/Biografia"
              >
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>                    
                      Conóceme
                  </motion.div>
              </NavLink>

              <NavLink 
                  className={ ({isActive}) => 'nav-link Letranavbar '+ (isActive ? ' active' : '') }  
                  to="/Formacion"
              >
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                      Formación
                  </motion.div>    
              </NavLink>

              <NavLink 
                  className={ ({isActive}) => 'nav-link Letranavbar '+ (isActive ? ' active' : '') }  
                  to="/Aptitudes"
              >
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                      Aptitudes
                  </motion.div>    
              </NavLink>
                      
              
            </motion.ul>
            }
          </motion.div>
            <div onClick={handleOpen}>
              <MenuToggle toggle={() => toggleOpen()}/>
            </div>
          </motion.nav>
  )
}

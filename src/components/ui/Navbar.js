
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';


export const Navbar = () => {
    //<motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />  
    return (
        <nav className="navbar navbar-expand-sm  bg-dark container-fluid">
            <div className="navbar-collapse ">
               <Link 
                className= "me-5"   
                to="/"
                id="uno"
            >
               <i className="fa-solid fa-atom fa-4x"></i>
            </Link>
                <div className="navbar-nav" >
                    
                    <NavLink 
                        className={ ({isActive}) => 'nav-item nav-link Letranavbar '+ (isActive ? ' active' : '') } 
                        to="/"
                    >
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                            Presentación
                        </motion.div>
                    </NavLink>            
                    
                    <NavLink 
                        className={ ({isActive}) => 'nav-item nav-link Letranavbar '+ (isActive ? ' active' : '') }  
                        to="/Biografia"
                    >
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>                    
                            Conóceme
                        </motion.div>
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => 'nav-item nav-link Letranavbar '+ (isActive ? ' active' : '') }  
                        to="/Formacion"
                    >
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                            Formación
                        </motion.div>    
                    </NavLink>
                    <NavLink 
                        className={ ({isActive}) => 'nav-item nav-link Letranavbar '+ (isActive ? ' active' : '') }  
                        to="/Aptitudes"
                    >
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                            Aptitudes
                        </motion.div>    
                    </NavLink>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                    
                        <NavLink 
                            className={ ({isActive}) => 'nav-item nav-link Letranavbar '+ (isActive ? ' active' : '') }  
                            to="/Search"
                            >
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                                Search  
                            <i className="fas fa-search ms-1"></i>
                            </motion.div>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
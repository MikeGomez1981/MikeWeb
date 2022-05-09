
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Aptitudes } from '../components/Aptitudes';
import { Biografia } from '../components/Biografia';
import { Formacion } from '../components/Formacion';
import { Presentacion } from '../components/Presentacion';
import { Navbarr } from '../components/ui/Navbarr';


export const AppRouter = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
            <div className="container ">
                <Navbarr />
                <Routes>
                    <Route path="/" element={<Presentacion/>} />
                    <Route path="Biografia" element={<Biografia />} />
                    <Route path="Formacion" element={<Formacion />} />
                    <Route path="Aptitudes" element={<Aptitudes />} />
                    
                    
                </Routes>
            </div>
    </BrowserRouter>
    );
};



import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Aptitudes } from '../components/Aptitudes';
import { Biografia } from '../components/Biografia';
import { Formacion } from '../components/Formacion';
import { Presentacion } from '../components/Presentacion';
import { Search } from '../components/Search';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
        <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Presentacion />} />
                    <Route path="Biografia" element={<Biografia />} />
                    <Route path="Formacion" element={<Formacion />} />
                    <Route path="Aptitudes" element={<Aptitudes />} />
                    <Route path="Search" element={<Search/>} />
                </Routes>
            </div>
    </BrowserRouter>
    );
};


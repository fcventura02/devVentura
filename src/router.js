import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/home'
//import Tcc from './pages/tcc'
import Portifolio from './pages/Portifolio'

export default function MainRouter(){
    return(
        <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/portifolio' element={<Portifolio/>}/>
        </Routes>
    )
}
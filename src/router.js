import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import SecondPage from './pages/secondPage'

export default function MainRouter(){
    return(
        <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/secondpage' element={<SecondPage/>}/>
        </Routes>
    )
}
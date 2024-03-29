import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global.css';
import { Calculator } from './templates/Calculator';

import {Faq} from './templates/Faq'
import { FormPage } from './templates/Form';
import { Home } from './templates/home';
import { Pokedex } from './templates/PokeApi/pokedex';
import {Qrcode} from './templates/Qrcode'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/form' element={<FormPage/>}/>
        <Route path='/qrcode' element={<Qrcode/>}/>
        <Route path='/calculator' element={<Calculator/>}/>
        <Route path='/pokedex' element={<Pokedex/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);




import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.js';
import Detalle from './screens/Detalle.js';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes> 
    <Route path="/" element={<App />} />
    <Route path="/:category/:id" element={<Detalle />} />
    </Routes>
    </BrowserRouter>
);


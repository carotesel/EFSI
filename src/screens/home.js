import React from 'react'
import Navbar from '../components/navbar';
import MasBuscados from '../components/mas-buscados';
import Novedades from '../components/novedades';
import Footer from '../components/footer';

export default function home() {
    return (
        <>
        <Navbar/>
            <MasBuscados/>
            <Novedades/>
            <Footer/>
        </>
            
    );
}

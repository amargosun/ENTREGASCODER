import React from 'react';
import NavBar from './components/NavBar.jsx';
import Local from './components/Local.jsx';
// import ItemListContainer from './components/ItemListContainer.jsx';
import './App.css';

export default function App() {
    return (
    <>
        <NavBar background={'transparent'} />
        <Local title="Sofía Spertino" />
        {/* <Hero title="Batman Store" /> */}
        {/* <ItemListContainer greeting= "Lista de Productos"/> */}

    </>
    );
}

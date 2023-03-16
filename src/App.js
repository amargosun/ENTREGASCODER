import React from 'react';
import Local from './components/Local.jsx';
import { ItemListContainer } from './components/ItemListContainer'
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import { CartContainer } from './components/CartContainer';


export default function App() {
    return (
    <>
        <BrowserRouter>
            <div>
                <NavBar/>
                <Routes>
                    {/* <Route path='/' element={<Local/>}/> */}
                    {/* <Route path="/productos/" element={<ItemListContainer />}/> */}
                    <Route path="/" element={<ItemListContainer />}/>
                    <Route path="/productos/:tipoProducto" element={<ItemListContainer />}/>
                    <Route path="/item/:itemid" element={<ItemDetailContainer/>}/> 
                    <Route path="/cart" element={<CartContainer/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    </>
    );
}

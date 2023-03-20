import React from 'react';
import {Link} from 'react-router-dom';
import { useContext} from 'react';
import {CartContext} from '../context/CartContext'
import {PedidoDetalle} from './PedidoDetalle.jsx'
import './styles/CerrarCompra.css';

export const CerrarCompra = () => {
    const {productCartList, suma, grabarOrden, clearProductCartList} = useContext(CartContext);
    if (productCartList.length === 0){
        return (
            <>
                <div className='cart-vacio'>
                    <br />
                    <br />
                    <br />
                    <h1>El carrito está vacío</h1>
                    <br />
                    <br />
                    <Link to = '/'>
                        <button className='hacer-compra'>Hacer una compra</button>
                    </Link>
                </div>
            </>
        )
    }
    return (
        <>
            <div className='ped-fondo'>
                <br />        
                <br />        
                <div className='ped-titulo'>Orden de Pedido </div>
                {
                    productCartList.map(item=>(<PedidoDetalle key={item.id} item={item}/>))
                }
                <div className='cierre-container'>
                    <p className='ped-total'>TOTAL COMPRA {suma}</p>
                    <div className='confirmar'>
                        <hr />
                        <Link to='/'>    
                            <button className='boton-confirmar' onClick={grabarOrden}>Confirmar Compra</button>
                        </Link>
                    </div>
                </div> 
            </div> 
        </>
    )
}


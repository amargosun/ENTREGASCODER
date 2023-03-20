import React from 'react';
import {Link} from 'react-router-dom';
import { useContext} from 'react';
import {CartContext} from '../context/CartContext'
import {PedidoDetalle} from './PedidoDetalle.jsx'
import './styles/CerrarCompra.css';

export const CerrarCompra = () => {
    const {productCartList, suma, grabarOrden, validarEmail, formularioValido} = useContext(CartContext);
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
                        <form name='f1' onSubmit={validarEmail(email, email2)}>
                            <label>Nombre:</label><br />
                            <input type="text" id="nombre" name="nombre"/><br />
                            <label>Apellido:</label><br />
                            <input type="text" id="apellido" name="apellido"/><br />
                            <label>Teléfono:</label><br />
                            <input type="tel" id="telefono" name="telefono"/><br />
                            <label>E-mail:</label><br />
                            <input type="email" id="email" name="email"/><br />
                            <label>Confirmar e-mail:</label><br />
                            <input type="email" id="email2" name="email2" />
                            <button type="submit"> Enviar </button>
                        </form>
                        <Link to='/'>    
                            <button className='boton-confirmar' disabled={(formularioValido) ? false : true} onClick={grabarOrden}>Confirmar Compra</button>
                        </Link>
                    </div>
                </div> 
            </div> 
        </>
    )
}


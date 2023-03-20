import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartItem } from './CartItem';
import { Link } from 'react-router-dom';
import './styles/CartContainer.css';

export const CartContainer = () => {
    const {productCartList, clearProductCartList} = useContext(CartContext);
    return (
        <div>
            {productCartList.length>0 ? 
                <> 
                    <div className='cart-cont'>
                        {
                            productCartList.map(item=>(
                            <CartItem key={item.id} item={item}/>))
                        }
                        <hr/>
                        <br />
                        <div className='botones'>
                            <Link to={'/'}>
                                <button className='vaciar-carrito' onClick={clearProductCartList}>Vaciar el carrito</button> 
                            </Link>
                            <Link to={'/CerrarCompra'}>
                                <button className='boton-siguiente'>Continuar la Compra</button>
                            </Link>
                        </div>
                    </div>
                </>
            :
                <div className='sin-productos'>
                    <br />
                    <br />
                    <br />
                    <p>No has agregado productos</p>
                    <br />
                </div>}
        </div>
    )
}

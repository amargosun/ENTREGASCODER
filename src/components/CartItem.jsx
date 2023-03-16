import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import './styles/CartItem.css';

export const CartItem = ({item}) => {
    const {removeProduct} = useContext(CartContext);

    return (
        <div className='cart-item-container'>
            <div className='cart-img-container'>
                <img src={item.imagen} alt={item.nombre}/>
            </div>
            <div className='cart-info-container'>
                <p className='itemnombrec'>{item.nombre}</p>
                <p className='itemdescric'>{item.descripcion}</p>
                <p>precio unitario: {item.precio}</p>
                <p>cantidad: {item.quantity}</p>
                <p>Precio total: {item.precio * item.quantity}</p>
                <button onClick={()=>removeProduct(item.id)}>Eliminar producto</button>
                <p> </p>
            </div>
        </div>
    )
}

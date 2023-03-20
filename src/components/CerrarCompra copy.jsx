import React from 'react';
import {Link} from 'react-router-dom';
import { useContext} from 'react';
import {CartContext} from '../context/CartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import {PedidoDetalle} from './PedidoDetalle.jsx'

export const CerrarCompra = () => {
    const {productCartList, clearProductCartList} = useContext(CartContext);
    const suma = productCartList.reduce((acumulador, item) => acumulador + item.totalPrice,0)
    const order = {
        cliente: {
            nombre: 'Juan Perez',
            email: 'jperez@mail.com',
            telefono: '3493567616',
            direccion: 'San Martín 180 - 2322 Sunchales (Sta. Fe)'
        },
        items: productCartList.map(producto => ({id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: producto.quantity,})),
        total: suma
        // total: totalOrden()
    }

    const grabarOrden = ()=>{
        const db = getFirestore()
        const ordersCollection = collection(db, 'ordenes')
        addDoc(ordersCollection, order)
        .then(({id})=>console.log(id))
        clearProductCartList()
    }
    if (productCartList.length === 0){
        return (
            <>
                <br />
                <br />
                <br />
                <p>El carrito está vacío</p>
                <br />
                <br />
                <Link to = '/'>Hacer una compra</Link>
            </>
        )
    }
    return (
        <>
            <div className='ped-titulo'>Orden de Pedido </div>
            <br />        
            <br />        
            <br />       
            {
                productCartList.map(item=>(<PedidoDetalle key={item.id} item={item}/>))
            }
            <div className='cierre-container'>
                <p>{suma}</p>
                <Link to='/'>    
                    <button onClick={grabarOrden}>Confirmar Compra</button>
                </Link>
            </div> 
        </>
    )
}


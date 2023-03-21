import { useContext} from 'react';
import {CartContext} from '../context/CartContext'
import './styles/MuestraIdCompra.css';
import {Link} from 'react-router-dom';

export const MuestraIdCompra = ()=>{
    const {idCompra} = useContext(CartContext);
    return(
        <div className='cont-id'>
            <br />
            <br />
            <br />
            <h3 className='titulo-id'>La identificación de su Pedido es:</h3>
            <h1 className='mensaje-id'>{idCompra}</h1>
            <br />
            <Link to = '/'>
                <button className='volver'>Volver al Inicio</button>
            </Link>
        </div>
    )
}
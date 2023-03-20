import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ItemCount } from './ItemCount';
import './styles/ItemDetail.css';

export const ItemDetail = ({item})=>{
    const {addProduct} = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);
    const onAdd = (count)=>{
        addProduct(item,count);
        setQuantity(count);
    }
    return(
        <div className='detail-container'>
            <div className='img-container'>
                <img src={`/assets/productos/${item.imagen}`} alt={item.nombre}/> 
            </div> 
            <div className='det-container'>
                <h4 className='nombreitemd'>{item.nombre}</h4>
                <h4 className='descriitemd'>{item.descripcion}</h4>
                <h5 className='precio'>$ {item.precio}</h5>
            </div>
            <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
        </div>
    )
}
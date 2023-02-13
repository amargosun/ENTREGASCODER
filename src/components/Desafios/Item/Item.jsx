import './Item.css';
import {Link} from 'react-router-dom';

export const Item = ({item})=>{
    return(
        <div className="tarjeta-producto">
            <img src={item.imagen} alt={item.nombre}/>
            <h4 className='itemnombre'>{item.nombre}</h4>
            <p className='itemdescri'>{item.descripcion}</p>
            <p>$ {item.precio}</p>
            <Link to={`/item/${item.id}`}>
                <button className='boton-ver'>Ver detalle...</button>
            </Link>
        </div>
    )
}
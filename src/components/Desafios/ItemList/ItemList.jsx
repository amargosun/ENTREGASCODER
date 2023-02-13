import { Item } from "../Item/Item"
import './ItemList.css';

export const ItemList = ({items})=>{
    return(
        <div className="estilos-listado">
            {
                items.map(producto=>(
                        <Item key={producto.id} item={producto}/>
                ))
            }
        </div>
    )
}
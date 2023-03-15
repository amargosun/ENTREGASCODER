import { Item } from "./Item"
import './styles/ItemList.css';

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
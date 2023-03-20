import './styles/PedidoDetalle.css';

export const PedidoDetalle = ({item}) => {
    return (
            <div className='ped-item-container'>
                <div className='ped-img-container'>
                    <img src={`/assets/productos/${item.imagen}`} alt={item.nombre}/>
                </div>
                <div className='ped-info-container'>
                    <p className='itemnombrep'>{item.nombre} <span>precio unitario: $ {item.precio}  -  cantidad: {item.quantity}  -  Precio total: $ {item.precio * item.quantity}</span> </p>
                    <p className='itemdescrip'>{item.descripcion}</p>
                </div>
            </div>
    )
}

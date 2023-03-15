export const ItemDetail = ({item})=>{
    return(
        <div className='detail-container'>
            {/* <div className='img-container'>
                <img src={item.imagen} alt={item.nombre}/>
            </div> */}
            <div className='img-container'>
                <h4 className='nombreitemd'>{item.nombre}</h4>
                <h4 className='descriitemd'>{item.descripcion}</h4>
                <h5>$ {item.precio}</h5>
            </div>
            {/* <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
            {
                quantity>0 &&
                <Link to="/cart">
                    <button>Ir al carrito</button>
                </Link>
            } */}
        </div>
    )
}
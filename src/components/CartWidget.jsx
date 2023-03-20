import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const CartWidget = ()=>{
    const {getTotalProducts, productCartList} = useContext(CartContext);

    return(
        <div>
            {
                productCartList.length>0 &&
                <>
                    <div className='cw-cont'>
                        <Link to="/cart">
                            <img src={`/assets/carrito.png`} alt="carrito" style={{width:40}}/> 
                        </Link>
                        <span style={{backgroundColor: 'white', borderRadius:"30%", width:"15px", heigth:"15px", fontSize:"15px", color:"black", font: "arial"}}>
                            {getTotalProducts()}
                        </span>
                    </div>
                </>
            }
        </div>
    )
}
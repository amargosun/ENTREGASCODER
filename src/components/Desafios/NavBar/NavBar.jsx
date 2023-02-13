import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css';
import {NavLink, Link} from 'react-router-dom';

export const Navbar = () =>{
    return(
        <nav className='nav-container'>
            <div className='navegacion'>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                to="/">Inicio</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                to="/productos/maquillaje">Maquillaje</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                to="/productos/accesorio">Accesorios</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                to="/productos/uñas">Uñas</NavLink>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}

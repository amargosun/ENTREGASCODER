import React from 'react';
import { CartWidget } from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as NavLink, Link } from 'react-router-dom';
import './styles/NavBar.css';

const NavBar = ({ background }) => {
    return (
        <header className={`header background--${background}`}>
            <div className="header">
                <div className="menu-button">
                    <FontAwesomeIcon icon={faBars} size="lg" color="rgb(188, 124, 29)"/>
                    <span>Menu</span>
                </div>
                <ul className='nav'>
                    <li className='linea-menu' >
                        <Link to="/">Inicio</Link> 
                    </li>
                    <li className='linea-menu'><a >Productos <span className="arrow"></span></a>
                        <ul className='submenu'>
                            <li className='linea-subm'>
                                <Link to="/">Catálogo</Link>
                            </li>
                            <li className='linea-subm'>
                                <Link to="/productos/maquillaje">Maquillaje</Link>
                            </li>
                            <li className='linea-subm'>
                                <Link to="/productos/uñas">Uñas</Link>
                            </li>                    
                            <li className='linea-subm'>
                                <Link to="/productos/accesorios">Accesorios</Link>
                            </li>                    
                        </ul>
                    </li>
                    <li className='linea-menu'>
                        <Link to="/">Nosotros</Link>
                    </li>
                    <li className='linea-menu'>
                        <Link to="/">Contacto</Link>
                    </li>
                    <div className='cart'>
                        <CartWidget />
                    </div>
                </ul>
            </div>
        </header>
    );
};
export default NavBar;

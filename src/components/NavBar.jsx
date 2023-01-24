import React from 'react';
import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Productos <span className="arrow"></span></a>
                        <ul>
                            <li><a href="/">Maquillaje</a></li>
                            <li><a href="/">Uñas</a></li>                    
                            <li><a href="/">Servicios</a></li>                    
                        </ul>
                    </li>
                    <li><a href="/">Nosotros</a></li>
                    <li><a href="/">Contacto</a></li>
                    <div className='cart'>
                        <CartWidget />
                    </div>
                </ul>
            </div>
        </header>
    );
};
export default NavBar;

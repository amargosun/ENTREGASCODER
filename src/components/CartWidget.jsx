import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

import './styles/CartWidget.css';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <FontAwesomeIcon icon={faShoppingBasket} size="2x" color="rgb(154, 113, 74)" opacity='0.7' />
            <div className="qty-display">0</div>
        </div>
    );
};

export default CartWidget;

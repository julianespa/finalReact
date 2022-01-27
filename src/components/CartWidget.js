import React, { useContext } from 'react';
import carrito from "../carrito.png"
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';

const CartWidget = () => {

    const {totalCartItems} = useContext(CartContext)
    return (
        <div className="iconoCarro">
            {totalCartItems()}
            <Link to="/carrito"> <img src={carrito} alt="carrito de compras" /> </Link>
        </div>
    )
}

export default CartWidget

import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

const CarritoItem = ({prod}) => {

    const {borrarItem} = useContext(CartContext)

    return (
        <div className="carritoItem">
            <p>Articulo:<span>{prod.name}</span>  Cantidad:<span>{prod.cantidad}</span> Subtotal: <span>${prod.cantidad * prod.precio}</span> </p>
            <button onClick={()=>{borrarItem(prod)}}>X</button>
        </div>
    )
}

export default CarritoItem

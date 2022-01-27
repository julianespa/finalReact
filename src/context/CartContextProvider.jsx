import React from 'react'
import CartContext from './CartContext'
import { useState } from 'react'

const CartContextProvider = ({children}) => {

    const [cartList, setcartList] = useState([])

    const agregarAlCarrito = (item) => {

        const index = cartList.findIndex(i => i.id === item.id)

        if (index > -1) {
            const oldQy = cartList[index].cantidad

            cartList.splice(index,1)

            setcartList([...cartList, { ...item, cantidad: item.cantidad + oldQy }])
            
        } else {

            setcartList([...cartList, item])
            
        }
    }

    const borrarItem = (item) => {

        const index = cartList.findIndex(i => i.id === item.id)

        cartList.splice(index,1)

        setcartList([...cartList])

    }

    const totalCart = () => {

        let count = 0
      
         cartList.forEach((prod)=>{
      
         count += prod.precio * prod.cantidad 
      
         })
      
         return count
      
    }
    const totalCartItems = () => {

        let count = 0
      
         cartList.forEach((prod)=>{
      
         count += prod.cantidad 
      
         })
         if (count>0) {  
             return count
         }
      
    }

    const vaciarCarrito = () => {
        setcartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito,
            borrarItem,
            totalCart,
            totalCartItems
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

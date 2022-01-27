import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import CarritoItem from './CarritoItem'
import { Link } from 'react-router-dom'
import { addDoc, collection, documentId, getDocs, getFirestore, query, Timestamp, where, writeBatch } from '@firebase/firestore'
import { useState } from 'react'
import CarritoForm from './CarritoForm'

const Carrito = () => {

    const [idOrder, setIdOrder] = useState('')
    const [dataForm, setDataForm] = useState({
        name:'', email:'',phone:''
    })

    const { cartList, vaciarCarrito, totalCart, totalCartItems } = useContext(CartContext)

    const cambiosForm = (e) => {
    
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
        
    }

    const generarOrden = (e) => {
        e.preventDefault()

        let orden = {}

        orden.date = Timestamp.fromDate(new Date())

        orden.buyer = dataForm 
        orden.total = totalCart()

        orden.items = cartList.map( item => {
            const id = item.id;
            const nombre = item.name;
            const precio = item.precio * item.cantidad;

            return {id, nombre, precio}
        } )

        const db = getFirestore()
        const coleccion = collection(db, 'orders')
        addDoc(coleccion, orden)
        .then(resp => setIdOrder(resp.id))
        .catch(err => console.log(err))
        .finally(() => {
            vaciarCarrito()
            setDataForm({
                name:'', email:'',phone:''
            })
        })

        const coleccionStock = collection(db, 'items')
        const actualizarStock = query(
            coleccionStock, where( documentId(), 'in', cartList.map(item => item.id) )
        )
        
        const batch = writeBatch(db)
        getDocs(actualizarStock)
        .then(resp => resp.docs.forEach(resp => batch.update(resp.ref, {
            stock: (resp.data().stock - cartList.find(item => item.id === resp.id).cantidad)
        })  ))
        .finally(() => batch.commit())
    }
    

    if (cartList.length === 0) {
        return(
            <div>
                {idOrder.length !== 0 && <p> ID orden: {idOrder}</p>}    
                <h1>El carrito se encuentra vacio</h1>
                <Link to="/"><button>Volver al Inicio</button></Link>
            </div>
        )
    } else {
        return(
            <div className="carrito">
                {cartList.map((prod) => < CarritoItem prod={prod}/> ) }
                <div>Precio Total: <span>${totalCart()}</span></div>
                <div>Cantidad total: <span>{totalCartItems()} Articulos</span></div>

                < CarritoForm generarOrden={generarOrden} cambiosForm={cambiosForm} dataForm={dataForm} />

                <button onClick={vaciarCarrito}>Vaciar carrito</button>
            </div>
        )
    }
}

export default Carrito


import React from 'react'
import { useState, useEffect} from 'react'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom'

import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { idcate } = useParams()

    useEffect(() => {
        const db = getFirestore()

        const queryCollection = idcate ?
                query(collection(db, 'items'), where('categoria','==',idcate)) 
            :
                collection(db, 'items')


        getDocs(queryCollection)
        .then(resp => setProductos( resp.docs.map(prod => ( { id: prod.id, ...prod.data() } )) ))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    
    }, [idcate])

    return (
        <div className="cuerpo">
            { loading ? <h2>Cargando...</h2> : <ItemList items={productos}/>}
        </div>
    )
}

export default ItemListContainer

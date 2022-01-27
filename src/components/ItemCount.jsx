import React, { useState} from 'react'


const ItemCount = ({stock, onAdd}) => {
    let [count, setCount] = useState(parseInt(1));
    

    const add = () => {
        if (count < stock) {
            setCount(count+1)
        }
    }

    const substract = () => {
        if (count > 1) {
            setCount(count-1)
        }
        
    }

    return (
        <div className="contador">
            <div>
                <p>{count}</p>
                <button className="suma" onClick={add}>+</button>
                <button className="suma" onClick={substract}>-</button>
            </div>
            <button className="agregar" onClick={()=>onAdd(count)}>Agregar</button>
        </div>
    )
}

export default ItemCount

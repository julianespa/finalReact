import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({item}) => {

    return(
        <div>
            <div className="card">
                <h2>{item.name}</h2>
                <img src={item.img} alt="imagen" />
                <h4>${item.precio}</h4>
                <button>
                    {(item.stock > 0)
                        ?
                            <Link to={`/detalle/${item.id}`}>Detalles</Link>
                        :
                            'Sin Stock'   
                    }
                </button>
            </div>
        </div>
    )
}



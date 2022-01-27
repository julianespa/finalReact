import React, { memo } from 'react'
import {Item} from './Item'

export const ItemList = memo(
    
    ({items}) => {
        return (
            <div className="prodContainer">    
                {items.map((item) => <Item item={item} key={item.id} />)}    
            </div>
        )
    }
)


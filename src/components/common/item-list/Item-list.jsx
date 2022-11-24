import React, {Component} from 'react';
import {WithDataHoc} from "../../hoc";


const ItemList = (props) => {
    const {children : renderLabel, onItemSelected, data } = props





    // const items = renderItems(data)

    const items = data.map((item)=>{
        const {id} = item;
        const label = renderLabel(item);

        return(
            <li className='list-group-item'
                key={id}
                onClick={() => onItemSelected(item.id)}
            >
                {label}
            </li>
        )
    })

    return (
        <div>
            <ul className='list-group'>
                {items}
            </ul>
        </div>

    );

}

export default ItemList;


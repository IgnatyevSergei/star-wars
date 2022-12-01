import React from 'react';

const ItemList = (props) => {
    const {children : renderLabel, onItemSelected, data} = props

    const items = data.map((item) => {
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


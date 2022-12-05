import React from 'react';

const  ItemDetails = (props) => {

        const {item, image} = props



        return (
            <div>
                <img className='rounded float-start planet'
                     src={image}
                     alt=""/>
                <h4>{item.name}</h4>
                <ul className='list-group list-group-flush detail'>
                    {
                        React.Children.map(props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        );

}

export default ItemDetails;
import React, {Component} from 'react';
import {WithDetailsInformationHoc} from "../hoc";


class ItemDetails extends Component {

    render() {
        const {item} = this.props
        return (<div>
            <img className='rounded float-start planet'
                 src={this.props.getImageUrl(item)}
                 alt=""/>
            <h4>{item.name}</h4>
            <ul className='list-group list-group-flush detail'>

                {React.Children.map(this.props.children, (child, index) => {
                    return React.cloneElement(child,{item})
                })}

            </ul>
        </div>);
    }
}

export default WithDetailsInformationHoc(ItemDetails);


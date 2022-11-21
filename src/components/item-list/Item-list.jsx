import React, {Component} from 'react';
import Spinner from "../spinner";
import Error from "../error";

class ItemList extends Component {

    state = {
        itemList: null,

    }

    componentDidMount() {
        const {getData} = this.props

        getData()
            .then(itemList => {
                this.setState({
                    itemList
                })
            })
            .catch((e) => console.log(e))
    }

    renderItems(itemList) {
        return itemList.map((item) => {
            const label = this.props.children(item)
            return (<li className='list-group-item'
                        key={item.id}
                        onClick={() => this.props.onItemSelected(item.id)}
            >
                {label}
            </li>)

        })
    }




    render() {

        const {itemList} = this.state

        if (!itemList) {
            return <Spinner/>
        }



        const items = this.renderItems(itemList)

        return (
            <div>
                <ul className='list-group'>
                    {items}
                </ul>
            </div>

        );
    }
}

export default ItemList;


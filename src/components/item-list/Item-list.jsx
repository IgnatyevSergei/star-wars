import React, {Component} from 'react';
import Spiner from "../spiner";
import Error from "../error";

class ItemList extends Component {



    state = {
        itemList: null,
        hasError: false
    }

    componentDidMount() {
        const {getData} = this.props


        getData()
            .then(itemList => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(itemList) {
        return itemList.map((item) => {
            const label = this.props.renderList(item)
            return (<li onClick={()=>{
            this.props.getPersonId(item.id)
        }} className='list-group-item' key={item.id}>
            {label}
        </li>)})
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {

    }

    render() {
        const {itemList, hasError} = this.state

        if (!itemList) {
            return <Spiner/>
        }

        if (hasError) {
            return <Error/>
        }

        const items = this.renderItems(itemList)


        return (
            <ul className='list-group'>
                {items}
            </ul>
        );
    }
}

export default ItemList;
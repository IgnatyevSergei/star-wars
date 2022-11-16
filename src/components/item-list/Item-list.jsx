import React, {Component} from 'react';
import servicesApi from "../../services-api/services-api";
import Spiner from "../spiner";
import Error from "../error";

class ItemList extends Component {
    services = new servicesApi()

    constructor(props) {
        super(props);
    }

    state = {
        peopleList: null,
        hasError: false
    }

    componentDidMount() {
        this.services.getAllPeople()
            .then(peopleList => {
                this.setState({
                    peopleList
                })
            })
    }

    renderItems(peopleList) {
        return peopleList.map(({id, name}) => (<li onClick={()=>{
            this.props.getPersonId({id})
        }} className='list-group-item' key={id}>
            {name}
        </li>))
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {

    }

    render() {
        const {peopleList, hasError} = this.state

        if (!peopleList) {
            return <Spiner/>
        }

        if (hasError) {
            return <Error/>
        }

        const items = this.renderItems(peopleList)


        return (
            <ul className='list-group'>
                {items}
            </ul>
        );
    }
}

export default ItemList;
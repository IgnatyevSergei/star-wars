import React, {Component} from 'react';
import servicesApi from "../../services-api";

class PersonDetails extends Component {
    services = new servicesApi()

    state ={
        item: null,
        image: null
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.selectedItem !== prevProps.selectedItem){
            this.updateItem()
        }
    }


    updateItem () {
        const {selectedItem} = this.props
        if(!selectedItem) return
        this.services.getPerson(selectedItem)
            .then(item => {
                this.setState({
                    item,
                    image: this.services.getPersonImage(item)})
            })
    }



    render() {

        const {item, image} = this.state

        if(!item){
            return <span> выберите элемент</span>
        }

        const {name, gender, birthYear, eyeColor} = this.state.item



          return (
            <div>
                <img  className="img-thumbnail float-start" src={image} alt=""/>
                <h4>{name}</h4>
                <ul className='list-group list-group-flush detail'>
                    <li className='list-group-item'>
                        <span className='term'>Gender:</span>
                        <span className='term'>{gender}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Berth Day:</span>
                        <span className='term'>{birthYear}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Eye color:</span>
                        <span className='term'>{eyeColor}</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default PersonDetails;
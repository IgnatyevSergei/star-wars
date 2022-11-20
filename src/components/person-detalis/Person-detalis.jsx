import React, {Component} from 'react';
import './person-detalis.css'


class ItemDetails extends Component {


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
        const {selectedItem, getData, getImage} = this.props

        if(!selectedItem) return
        getData(selectedItem)
            .then(item => {
                this.setState({
                    item,
                    image: getImage(item)})

            })
    }

    renderItem (item) {
       return  Object.entries(item).map(([title, description]) =>{
           if (title === 'id' || title === 'name') {return }
           return (<li className='list-group-item' key={title.id}>
                        <span className='term'>{title}:</span>
                       <span className='term'>{description}</span>
                     </li>

            )
        })


    }



    render() {

        const {item, image} = this.state

        if(!item){
            return <span> выберите элемент</span>
        }

        const {name} = this.state.item

        const itemIfo =  this.renderItem(item)

        console.log(itemIfo)






          return (
            <div>
                <img  className="img-thumbnail float-start size" src={image} alt=""/>
                <h4>{name}</h4>
                <ul className='list-group list-group-flush detail'>
                    {itemIfo}
                </ul>
            </div>
        );
    }
}

export default ItemDetails;






// <li className='list-group-item'>
//     <span className='term'>Gender:</span>
//     <span className='term'>{gender}</span>
// </li>
// <li className='list-group-item'>
//     <span className='term'>Berth Day:</span>
//     <span className='term'>{birthYear}</span>
// </li>
// <li className='list-group-item'>
//     <span className='term'>Eye color:</span>
//     <span className='term'>{eyeColor}</span>
// </li>
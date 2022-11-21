import React, {Component} from 'react';


class ItemDetails extends Component {



    state = {
        item: null,
        image: null,
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps, prevState, s) {
        if (this.props.selectedItem !== prevProps.selectedItem) {
            this.updateItem()
        }
    }

    updateItem() {
        const {selectedItem, getData, getImageUrl} = this.props
        if (!selectedItem) return
        getData(selectedItem)
            .then(item => {
                this.setState({
                    item,
                    image: getImageUrl(item)
                })
            })
    }


    render() {
        const {item, image} = this.state

        if (!item) {
            return <span>Выберите элемент из списка!</span>
        }

        const {name,birthYear, eyeColor, gender } = item


        return (
            <div>
                <img className='rounded float-start planet'
                     src={image}
                     alt=""/>
                <h4>{name}</h4>
                <ul className='list-group list-group-flush detail'>
                    {
                      React.Children.map(this.props.children, (child, index)=>{
                          return React.cloneElement(child, {item})
                      })
                    }

                </ul>
            </div>
        );
    }
}

export default ItemDetails;
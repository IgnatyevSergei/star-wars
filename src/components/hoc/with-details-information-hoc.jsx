import React, {Component} from 'react';

export const WithDetailsInformationHoc = (ViewComponent) => {
    return class extends Component {
        state = {
            item: null, image: null,
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
                        item, image: getImageUrl(item)
                    })
                })
        }

        render() {
            const {item} = this.state

            if (!item) {
                return <span>Выберите элемент из списка!</span>
            }

            return <ViewComponent {...this.props} item={item}/>
        }
    }
};


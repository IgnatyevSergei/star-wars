import React, {Component} from "react";
import Record from "../common/record";


export const WithItemDetailsDataHoc = (renderChildren) => (ViewComponent) => {
    return class extends Component {

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
            const childrenConfiguration = renderChildren()
            const details = childrenConfiguration.map((item) => <Record {...item}/>)
               const {item, image} = this.state

           return <ViewComponent {...this.props} item={item} image={image}>
                {details}
            </ViewComponent>
        }
    }
}
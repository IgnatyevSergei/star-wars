import React, {Component} from "react";
import Record from "../common/record";
import ErrorBoundary from "../error-boundary";
import Spinner from "../spinner";
import Error from "../error";


export const WithItemDetailsDataHoc = (renderChildren) => (ViewComponent) => {
    return class extends Component {

        state = {
            item: null,
            image: null,
            hasError: false,
            isLoading: false,
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
            this.setState({isLoading: true})
            getData(selectedItem)
                .then(item => {
                    this.setState({
                        item,
                        image: getImageUrl(item),
                        isLoading: false
                    })
                })
                .catch(e => this.setState({
                    hasError: true,
                    isLoading: false
                }))
        }


        render() {
            const childrenConfiguration = renderChildren()
            const details = childrenConfiguration.map((item) => <Record key={item.value} {...item}/>)
            const {item, image,isLoading, hasError} = this.state

            if (isLoading) {
                return <Spinner/>
            }

            if (hasError) {
                return <Error/>
            }

            if (!item) {
                return <span>Выберите элемент из списка!</span>
            }

            return (
                <ErrorBoundary>
                    <ViewComponent {...this.props} item={item} image={image}>
                        {details}
                    </ViewComponent>
                </ErrorBoundary>)
        }
    }
}
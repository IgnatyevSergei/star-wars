import React, {Component} from 'react';
import Spinner from "../spinner";
import Error from "../error";
import ErrorBoundary from "../error-boundary";

export const WithDataHoc = (ViewComponent) => {

    return class extends Component {


        state = {
            data: null,
            hasError: false,
            isLoading: true
        }


        componentDidMount() {

            const {getData} = this.props
            getData()
                .then(data => {
                    this.setState({data, isLoading: false})
                })
                .catch((e) => this.setState({
                    hasError: true,
                    isLoading: false
                }))
        }

        render() {
            const {data, hasError, isLoading} = this.state

            if (isLoading) {
                return <Spinner/>
            }

            if (hasError) {
                return <Error/>
            }

            return <ErrorBoundary>
                <ViewComponent  {...this.props} data={data}/>
            </ErrorBoundary>

        }
    }
};
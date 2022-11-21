import React, {Component} from 'react';
import Spinner from "../spinner";

export const WithDataHoc = (ViewComponent) => {
    return class extends Component {
        state = {
            data: null,

        }

        componentDidMount() {
            const {getData} = this.props

            getData()
                .then(data => {
                    this.setState({
                        data
                    })
                })
                .catch((e) => console.log(e))
        }

        render() {
            const {data} = this.state

            if(!data) {
                return  <Spinner/>
            }

            return <ViewComponent {...this.props} data={data}/>

        }


    }


};


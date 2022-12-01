import React, {Component} from "react";
import Row from "../common/row";
import {StarshipDetails, StarshipList} from "../sw-components";

class StarshipsPage extends Component {

    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render() {
        return (
            <Row left={<StarshipList onItemSelected={this.onItemSelected}/>}
                 right={<StarshipDetails selectedItem={this.state.selectedItem}/>}/>
        );
    }
}

export default StarshipsPage
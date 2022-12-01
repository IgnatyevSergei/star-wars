import React, {Component} from "react";
import Row from "../common/row";
import {PlanetDetails, PlanetList} from "../sw-components";

export class PlanetsPage extends Component {

    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render() {
        return (
            <Row left={<PlanetList onItemSelected={this.onItemSelected}/>}
                 right={<PlanetDetails selectedItem={this.state.selectedItem}/>}/>
        );
    }
}


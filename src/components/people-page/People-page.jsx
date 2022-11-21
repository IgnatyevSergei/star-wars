import React, {Component} from 'react';
import ItemDetails from "../item-details";
import ItemList from "../item-list";
import ServicesApi from "../../services-api";
import Record from "../common/record";
import ErrorBoundary from "../error-boundary";
import Row from "../common/row";

class PeoplePage extends Component {

    services = new ServicesApi()

    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }


    render() {
        const {selectedItem} = this.state

        const {getPerson, getPersonImage, getAllPeople} = this.services

        const itemList = <ItemList
            onItemSelected={this.onItemSelected}
            getData={getAllPeople}>
            {
                (item) => <span>{item.name}</span>
            }
        </ItemList>

        const itemDetails = <ItemDetails selectedItem={selectedItem}
                                         getData={getPerson}
                                         getImageUrl={getPersonImage}
        >
            <Record label={'Eye Color:'} value={'eyeColor'}/>
            <Record label={'Gender:'} value={'gender'}/>
            <Record label={'Birth Year:'} value={'birthYear'}/>

        </ItemDetails>

        return (
            <ErrorBoundary>
               <Row left={itemList} right={itemDetails}/>
            </ErrorBoundary>
        );
    }
}

export default PeoplePage;
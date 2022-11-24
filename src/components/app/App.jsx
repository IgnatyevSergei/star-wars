import React, {Component} from 'react'

import PeoplePage from "../people-page";
import ServicesApi from "../../services-api";
import RandomPlanetBlock from "../random-planet-block";
import Header from "../header";
import ErrorBoundary from "../error-boundary";
import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipsDetails, StarshipsList} from "../sw-components";
import {ServiceProvider} from '../context'
import Row from '../common/row'

class App extends Component {

    services = new ServicesApi()

    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }


    render() {
        return (
            <ErrorBoundary>
                <ServiceProvider value={this.services}>
                    <Header/>
                    <RandomPlanetBlock/>
                    {/*<PeoplePage/>*/}
                    <Row left={<PersonList onItemSelected={this.onItemSelected}/>}
                         right={<PersonDetails selectedItem={this.state.selectedItem}/>}/>
                    <Row
                        left={<PlanetList onItemSelected={this.onItemSelected}/>}
                        right={<PlanetDetails selectedItem={this.state.selectedItem}/>}/>

                    <Row
                        left={<StarshipsList onItemSelected={this.onItemSelected}/>}
                        right={<StarshipsDetails selectedItem={this.state.selectedItem}/>}/>

                </ServiceProvider>
            </ErrorBoundary>)
    }

}

export default App

{/*         <br/>*/
}
{/*<div className={'row mb2'}>*/
}
{/*    <div className={'col-md-6'}>*/
}
{/*        <ItemList*/
}
{/*            onItemSelected={this.onItemSelected}*/
}
{/*            getData={this.services.getAllPlanets}*/
}
{/*            renderList={(item) => <span>{item.diameter}</span>   }*/
}

{/*        />*/
}
{/*    </div>*/
}
{/*</div>*/
}
{/*<br/>*/
}
{/*<div className={'row mb2'}>*/
}
{/*    <div className={'col-md-6'}>*/
}
{/*        <ItemList*/
}
{/*            onItemSelected={this.onItemSelected}*/
}
{/*            getData={this.services.getAllStarShips}*/
}
{/*            renderList={(item) => `${item.model}` }*/
}

{/*        />*/
}
{/*    </div>*/
}
{/*</div>*/
}

{/*<PeoplePage/>*/
}
{/*<PeoplePage/>*/
}

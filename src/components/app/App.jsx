import React from 'react'
import Header from "../header";
import RandomPlanetBlock from "../random-planet-block";
import ItemList from "../item-list";
import PeoplePage from "../people-page";
import ItemDetails from "../person-detalis";
import ServicesApi from "../../services-api";


class App extends React.Component {

    services = new ServicesApi()

    state = {
        personId: null
    }

    getPersonId =(id)=>{
        this.setState({
            personId: id
        })
    }

    render() {
        return (<div>
                <Header/>
                <RandomPlanetBlock/>
                {/*<HeroesBlock/>*/}
                <PeoplePage/>
                <br/>
                <div className='row mb2'>
                    <div className='col-md-6'>
                        <ItemList getPersonId={this.getPersonId}
                                  getData={this.services.getAllPlanets}
                                  renderList={(item)=> <span>{item.Diameter}</span> }/>
                    </div>
                    <div className='col-md-6'>
                        <ItemDetails selectedItem={this.state.personId}
                                       getData={this.services.getPlanet}
                                       getImage={this.services.getPlanetImage} />
                    </div>
                    <div className='col-md-6'></div>
                </div>
                    <br/>
                <div className='row mb2'>
                    <div className='col-md-6'>
                        <ItemList getPersonId={this.getPersonId}
                                  getData={this.services.getAllStarships}
                                  renderList={(item)=> <span>{item.Model}</span>}/>
                    </div>
                    <div className='col-md-6'>
                        <ItemDetails selectedItem={this.state.personId}
                                       getData={this.services.getStarships}
                                       getImage={this.services.getStarshipsImage} />
                    </div>
                    <div className='col-md-6'></div>
                </div>

            </div>

        )
    }


}

export default App
import React from 'react'
import Header from "../header";
import HeroesBlock from '../heroes-block';
import RandomPlanetBlock from "../random-planet-block";
import ItemList from "../item-list";
import PeoplePage from "../people-page";
import PersonDetalis from "../person-detalis/Person-detalis";
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
                                  renderList={(item)=> <span>{item.diameter}</span> }/>
                    </div>
                    <div className='col-md-6'></div>
                </div>
                    <br/>
                <div className='row mb2'>
                    <div className='col-md-6'>
                        <ItemList getPersonId={this.getPersonId}
                                  getData={this.services.getAllStarships}
                                  renderList={(item)=> <span>{item.model}</span>}/>
                    </div>
                    <div className='col-md-6'></div>
                </div>

            </div>

        )
    }


}

export default App
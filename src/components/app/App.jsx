import React from 'react'
import Header from "../header";
import HeroesBlock from '../heroes-block';
import RandomPlanetBlock from "../random-planet-block";
import ItemList from "../item-list";
import PeoplePage from "../people-page";



const App = () =>{
    return(<div>
            <Header/>
            <RandomPlanetBlock/>
            {/*<HeroesBlock/>*/}
            <PeoplePage/>

        </div>

    )
}

export default App
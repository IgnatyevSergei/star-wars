import React from 'react';
import './random-planet-block.css'
import servicesApi from "../../services-api";

class RandomPlanetBlock extends React.Component{
    services = new servicesApi()

    state = {
      planet: {

      }
    }

    constructor(props) {
        super(props);

        // this.fetchPlanet()
    }

    setPlanet = (planet) =>{
        this.setState({
            planet
        })
    }

    fetchPlanet = () =>{
        this.services.getPlanet(15)
            .then(this.setPlanet)
    }

    render() {
       const {name = '',population = '', diameter = '', rotation_period = '' } = this.state

        return (

            <div className='random-planet-block'>
                <img className='img-thumbnail float-start size'
                     src="https://starwars-visualguide.com/assets/img/planets/15.jpg" alt=""/>


                <h4>{name}</h4>
                <ul className='list-group list-group-flush detail'>
                    <li className='list-group-item'>
                        <span className='term'>Population:</span>
                        <span className='term'>{population}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Rotation Period:</span>
                        <span className='term'>{rotation_period}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Diameter:</span>
                        <span className='term'>{diameter}</span>
                    </li>
                </ul>
            </div>

        );


    }


};

export default RandomPlanetBlock;
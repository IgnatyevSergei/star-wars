import React from 'react';
import './random-planet-block.css'
import servicesApi from "../../services-api";
import Spiner from "../spiner";
import Error from "../error";

class RandomPlanetBlock extends React.Component {
    services = new servicesApi()

    state = {
        planet: {},
        isLoading: true,
        hasError: false
    }

    componentDidMount() {
        this.fetchPlanet()
        // this.intervalId = setInterval(this.fetchPlanet, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }


    setPlanet = (planet) => {
        this.setState({
            planet,
            isLoading: false,
            hasError:false
        })
    }

    fetchPlanet = () => {
        const id = Math.floor(Math.random() * 17) + 2
        this.services.getPlanet(id)
            .then(this.setPlanet)
            .catch(this.setError)

    }

    setError = (error) => {
        this.setState({
            hasError:true,
            isLoading:false
        })
    }

    render() {
        const {planet, isLoading, hasError} = this.state

        const spinner =isLoading && <Spiner/>
        const error = hasError && <Error/>
        const content =!(isLoading || hasError) && <RandomPlanet planet = {planet}/>

        return (
            <div className='container'>
                {spinner}
                {error}
                {content}
            </div>

        );

    }
};

const RandomPlanet = ({planet}) =>{
    const {name, population, diameter, rotationPeriod, id } = planet

    return(
        <div className='random-planet-block'>
            <img className='img-thumbnail float-start size'
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
            <h4>{name}</h4>
            <ul className='list-group list-group-flush detail'>
                <li className='list-group-item'>
                    <span className='term'>Population:</span>
                    <span className='term'>{population}</span>
                </li>
                <li className='list-group-item'>
                    <span className='term'>Rotation Period:</span>
                    <span className='term'>{rotationPeriod}</span>
                </li>
                <li className='list-group-item'>
                    <span className='term'>Diameter:</span>
                    <span className='term'>{diameter}</span>
                </li>
            </ul>

        </div>
    )
}

export default RandomPlanetBlock;
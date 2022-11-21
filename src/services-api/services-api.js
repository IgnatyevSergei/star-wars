class ServicesApi {

    _apiBasePath = 'https://swapi.dev/api';
    _imageBasePath = 'https://starwars-visualguide.com/assets/img';


    getResource = async (url) => {
        try {
            const response = await fetch(`${this._apiBasePath}${url}`)

            if (!response.ok) {
                throw new Error(`No connection: Status response ${response.status}`)
            }

            return await response.json()
        } catch (e) {
            console.log(e)
        }

    }

    getAllPlanets = async () => {
        const response = await this.getResource('/planets/')
        return response.results.map(this._transformPlanetData)
    }

    getPlanet = async (id) => {
        const response = await this.getResource(`/planets/${id}`)
        return this._transformPlanetData(response)
    }

    getAllPeople = async () => {
        const response = await this.getResource('/people/')
        return response.results.map(this._transformPersonData)
    }

    getPerson = async (id) => {
        const response = await this.getResource(`/people/${id}`)
        return this._transformPersonData(response)
    }

    getAllStarShips = async () => {
        const response = await this.getResource('/starships/')
        return response.results.map(this._transformStarshipData)
    }

    getStarShip = async (id) => {
        const response = await this.getResource(`/starships/${id}`)
        return this._transformStarshipData(response)
    }

    getPersonImage = ({id}) => {
        return `${this._imageBasePath}/characters/${id}.jpg`
    }

    getPlanetImage = ({id}) => {
        return `${this._imageBasePath}/planets/${id}.jpg`
    }

    getStarshipImage = ({id}) => {
        return `${this._imageBasePath}/starships/${id}.jpg`
    }

    _extractId = (url) => {
        const regExp = /\/([0-9]*)\/$/
        return url.match(regExp)[1]
    }

    _transformPlanetData = (response) => {
        return {
            id: this._extractId(response.url),
            name: response.name,
            population: response.population,
            rotationPeriod: response.rotation_period,
            diameter: response.diameter
        }
    }

    _transformPersonData = (person) => {
        return {
            id: this._extractId(person.url),
            name: person.name,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
            gender: person.gender
        }
    }

    _transformStarshipData = (starship) => {
        return {
            id: this._extractId(starship.url),
            name: starship.name,
            model: starship.model,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            costInCredits: starship.cost_in_credits,
        }
    }
}


export default ServicesApi


class ServicesApi {

    _apiBasePath = 'https://swapi.dev/api'

    _imageBasePath = `https://starwars-visualguide.com/assets/img`

     getResource = async (url) => {
        const response = await fetch(`${this._apiBasePath}${url}`)

        if (!response.ok) {
            throw new Error(`No connection: Status ${response.status}`)
        }

        return await response.json()

    }

     getAllPlanets = async () => {
        const response = await this.getResource('/planets/')
        return await response.results.map(this._transformPlanetData)
    }

     getPlanet = async (id) => {
        const response = await this.getResource(`/planets/${id}`)

        return this._transformPlanetData(response)
    }

     getAllPeople= async () => {
        const response = await this.getResource('/people/')
        return await response.results.map(this._transformPersonData)
    }

     getPerson = async (id) => {
        const response = await this.getResource(`/people/${id}`)
        return this._transformPersonData(response)


    }

     getAllStarships = async () => {
        const response = await this.getResource('/starships/')
        return await response.results.map(this._transformStarshipData)


    }

     getStarships = async (id) => {
        const response = await this.getResource(`/starships/${id}`)
        return this._transformStarshipData(response)


    }

    getPersonImage = ({id}) => {
        return `${this._imageBasePath}/characters/${id}.jpg`
    }
    getPlanetImage = ({id}) => {
        return `${this._imageBasePath}/planets/${id}.jpg`
    }
    getStarshipsImage = ({id}) => {
        return `${this._imageBasePath}/starships/${id}.jpg`
    }

    _extract(url) {
        const regExp = /\/([0-9]*)\/$/
        return url.match(regExp)[1]
    }

    _transformPlanetData = (response) => {
        return {
            id: this._extract(response.url),
            name: response.name,
            Population: response.population,
            'Rotation_Period': response.rotation_period,
            Diameter: response.diameter

        }
    }

    _transformPersonData = (person) => {
        return {
            id: this._extract(person.url),
            name: person.name,
            Gender: person.gender,
            'Birth Year': person.birth_year,
            'Eye color': person.eye_color,


        }
    }

    _transformStarshipData = (starship) => {
        return {
            id: this._extract(starship.url),
            name: starship.name,
            Model: starship.model,
            Length: starship.length,
            'Cost in credits': starship.cost_in_credits,



        }
    }






}

export default ServicesApi


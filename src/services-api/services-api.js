class ServicesApi {

    _apiBasePath = 'https://swapi.dev/api'

    async getResource(url) {
        const response = await fetch(`${this._apiBasePath}${url}`)

        if (!response.ok) {
            throw new Error(`No connection: Status ${response.status}`)
        }

        return await response.json()

    }

    async getAllPlanets() {
        const response = await this.getResource('/planets/')
        return await response.results
    }

    async getPlanet(id) {
        const response = await this.getResource(`/planets/${id}`)

        return this._transformPlanetData(response)
    }

    async getAllPeople() {
        const response = await this.getResource('/people/')
        return await response.results.map( this._transformPersonData)
    }

    async getPerson(id) {
        const response = await this.getResource(`/people/${id}`)
        return await response


    }

    async getAllStarships() {
        const response = await this.getResource('/starships/')
        return await response.results


    }

    async getStarships(id) {
        const response = await this.getResource(`/starships/${id}`)
        return await response


    }

    _extract(url) {
        const regExp = /\/([0-9])*\/$/
        return url.match(regExp)[1]
    }

    _transformPlanetData(response) {
        return {
            id: this._extract(response.url),
            name: response.name,
            population: response.population,
            rotationPeriod: response.rotation_period,
            diameter: response.diameter

        }
    }

    _transformPersonData=(person)=> {
        return {
            id: this._extract(person.url),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,


        }
    }


}

export default ServicesApi


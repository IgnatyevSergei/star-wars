import React from "react";
import ItemList from "../common/item-list";
import {compose, WithChildFunctionHoc, WithDataHoc, WithServicesHoc} from "../hoc";


const mapPersonListMethodToProps = (service) => ({
    getData: service.getAllPeople,

})
const mapPlanetListMethodToProps = (service) => ({
    getData: service.getAllPlanets,

})
const mapStarshipsListMethodToProps = (service) => ({
    getData: service.getAllStarShips,

})

const renderName = (item) => <span>{item.name}</span>
const renderNameAndModel = ({name, model}) => <span>{name} ({model})}</span>

const PersonList =compose(

 WithServicesHoc(mapPersonListMethodToProps),
 WithDataHoc,
 WithChildFunctionHoc(renderName))
 (ItemList)


const PlanetList = compose(
    WithServicesHoc(mapPlanetListMethodToProps),
    WithDataHoc,
    WithChildFunctionHoc(renderName))(ItemList)

const StarshipList = compose(
    WithServicesHoc(mapStarshipsListMethodToProps),
    WithDataHoc,
    WithChildFunctionHoc(renderNameAndModel))
    (ItemList)


export {
    PersonList,
    PlanetList,
    StarshipList
}


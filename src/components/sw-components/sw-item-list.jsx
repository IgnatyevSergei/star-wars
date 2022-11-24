import React from "react";
import ItemList from "../common/item-list";
import {WithDataHoc, WithChildFunctionHoc} from "../hoc";
import ServicesApi from "../../services-api";


const services = new ServicesApi()

const {
    getAllPeople,
    getAllPlanets,
    getAllStarShips
} = services

const renderName =  (item) => <span>{item.name}</span>
const renderNameAndModel =({name, model})=> <span> {name} ({model})</span>



const PersonList = WithDataHoc(
    WithChildFunctionHoc(ItemList, renderName),
    getAllPeople
)

const PlanetList = WithDataHoc(
    WithChildFunctionHoc(ItemList, renderName),
    getAllPlanets
)

const StarshipsList = WithDataHoc(
    WithChildFunctionHoc(ItemList, renderNameAndModel),
    getAllStarShips
)


export {
    PersonList,
    PlanetList,
    StarshipsList
}
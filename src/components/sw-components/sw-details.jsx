import ItemDetails from "../item-details/item-details";
import Record from "../common/record";
import React from "react";
import {ServiceConsumer} from '../context'



export const PersonDetails = ({selectedItem}) =>{
    return (
        <ServiceConsumer>
            {
                ({getPerson, getPersonImage})=>{
                    return(
                        <ItemDetails selectedItem={selectedItem}
                                     getData={getPerson}
                                     getImageUrl={getPersonImage}
                        >
                            <Record label={'Eye Color:'} value={'eyeColor'}/>
                            <Record label={'Gender:'} value={'gender'}/>
                            <Record label={'Birth Year:'} value={'birthYear'}/>

                        </ItemDetails>
                    )
                }
            }
        </ServiceConsumer>
    )

}

export const PlanetDetails = ({selectedItem}) =>{
    return (
        <ServiceConsumer>
            {
                ({getPlanet, getPlanetImage})=>{
                    return(
                        <ItemDetails selectedItem={selectedItem}
                                     getData={getPlanet}
                                     getImageUrl={getPlanetImage}
                        >
                            <Record label={'Population:'} value={'population'}/>
                            <Record label={'Rotation Period:'} value={'rotationPeriod'}/>
                            <Record label={'Diameter:'} value={'diameter'}/>

                        </ItemDetails>
                    )
                }
            }
        </ServiceConsumer>
    )

}

export const StarshipsDetails = ({selectedItem}) =>{
    return (
        <ServiceConsumer>
            {
                ({getStarShip, getStarshipImage})=>{
                    return(
                        <ItemDetails selectedItem={selectedItem}
                                     getData={getStarShip}
                                     getImageUrl={getStarshipImage}
                        >
                            <Record label={'Model:'} value={'model'}/>
                            <Record label={'Length:'} value={'length'}/>
                            <Record label={'Cost in credits:'} value={'costInCredits'}/>

                        </ItemDetails>
                    )
                }
            }
        </ServiceConsumer>
    )

}




import React, {Component} from "react";
import Row from "../common/row";
import {PlanetDetails, PlanetList} from "../sw-components";
import {withRouter} from "react-router-dom";

const PlanetsPage = ({match, history}) => {
    const {id} = match.params


        return (
            <Row left={<PlanetList onItemSelected={(id)=> history.push(id)}/>}
                 right={<PlanetDetails selectedItem={id}/>}/>
        );

}

export default withRouter(PlanetsPage)



import React, {Component} from "react";
import Row from "../common/row";
import {StarshipDetails, StarshipList} from "../sw-components";
import {withRouter} from "react-router-dom";
import Spinner from "../spinner";

const StarshipsPage = ({match, history}) => {
    const {id} = match.params


        return (
            <Row left={<StarshipList onItemSelected={(id)=> history.push(id)}/>}
                 right={<StarshipDetails selectedItem={id}/>}/>
        );

}

export default withRouter(StarshipsPage)
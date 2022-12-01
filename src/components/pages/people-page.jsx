import React, {Component} from 'react';
import Row from "../common/row";
import {PersonDetails, PersonList} from "../sw-components";
import {withRouter} from "react-router-dom";

const PeoplePage = ({match, history}) => {

    const {id} = match.params

    return (

        <Row left={<PersonList onItemSelected={(id)=> history.push(id)}/>}
             right={<PersonDetails selectedItem={id}/>}/>
    )

}

export default withRouter(PeoplePage)


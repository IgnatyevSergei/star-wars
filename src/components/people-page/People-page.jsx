import React, {Component} from 'react';
import ItemDetails from "../person-detalis";
import ItemList from "../item-list";
import ServicesApi from "../../services-api";

class PeoplePage extends Component {
    services = new ServicesApi()

   state = {
       personId: null
   }

   getPersonId =(id)=>{
       this.setState({
           personId: id
       })
   }



    render() {
          return (
            <div className='row mb2'>
                <div className='col-md-6'>
                    <ItemList getPersonId={this.getPersonId}
                    getData={this.services.getAllPeople}
                    renderList={(item)=> `${item.name}` }/>
                </div>
                <div className='col-md-6'>
                    <ItemDetails selectedItem={this.state.personId}
                                   getData={this.services.getPerson}
                                   getImage={this.services.getPersonImage} />
                </div>
            </div>
        );
    }
}

export default PeoplePage;
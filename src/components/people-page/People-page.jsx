import React, {Component} from 'react';
import PersonDetalis from "../person-detalis";
import ItemList from "../item-list";

class PeoplePage extends Component {
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
                    <ItemList getPersonId={this.getPersonId} />
                </div>
                <div className='col-md-6'>
                    <PersonDetalis selectedItem={this.state}/>
                </div>
            </div>
        );
    }
}

export default PeoplePage;
import React, {Component} from 'react';
import PersonDetalis from "../person-detalis";
import ItemList from "../item-list";

class PeoplePage extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.id

        console.log(this.props)
    }

    render() {
          return (
            <div className='row mb2'>
                <div className='col-md-6'>
                    <ItemList id = {this.id} />
                </div>
                <div className='col-md-6'>
                    <PersonDetalis/>
                </div>
            </div>
        );
    }
}

export default PeoplePage;
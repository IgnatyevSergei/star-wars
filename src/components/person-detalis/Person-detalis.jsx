import React, {Component} from 'react';

class PersonDetails extends Component {
    render() {
        console.log(this.props.selectedItem)

        return (
            <div>
                <img  className="img-thumbnail float-start" src={`https://starwars-visualguide.com/assets/img/planets/${5}.jpg`} alt=""/>
                <h4>NAME</h4>
                <ul className='list-group list-group-flush detail'>
                    <li className='list-group-item'>
                        <span className='term'>Gender:</span>
                        <span className='term'>1111</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Berth Day:</span>
                        <span className='term'>11111</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Eye color:</span>
                        <span className='term'>11111</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default PersonDetails;
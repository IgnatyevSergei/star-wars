import React, {Component} from 'react';

class ErrorButton extends Component {
    state = {
        error: false
    }


    render() {
        if (this.state.error) {
            this.test.error = undefined
        }
        return (
            <div>
                <button className={'btn btn-danger'}
                        onClick={() => this.setState({error: true})}>
                    CLICK ERROR
                </button>
            </div>
        );
    }
}

export default ErrorButton;
import React from 'react';
import ErrorBoundary from "../../error-boundary";

const Row = ({left, right}) => {
    return (
        <div className={'row mb2'}>
            <div className={'col-md-6'}>

                {left}

            </div>
            <div className={'col-md-6'}>

                {right}

            </div>
        </div>
    );
};

export default Row;
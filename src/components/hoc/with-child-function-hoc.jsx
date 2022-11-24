import React from 'react';

export const WithChildFunctionHoc = (Wrapped, fn) => {
         return (props) =>{
            return (
                <Wrapped {...props}>
                    {fn}
                </Wrapped>
            )
        }
};


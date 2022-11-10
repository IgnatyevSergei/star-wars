import React from 'react';
import icon from './error.png'

const Error = () => {
    return (
       <div>
           <img src={icon} alt="error"/>
           <p>Что-то пошло не так!</p>
           <p>Наша группа работает над пробемой</p>
       </div>
    );
};

export default Error;
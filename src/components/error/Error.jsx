import React from "react";
import icon from './Error.png'
import './error.css'

const Error = () => {
    return (
        <div className='container'>
            <img className='icon' src={icon} alt="error"/>
            <p>Что-то пошло не так!</p>
            <p>Наша группа уже работает над проблемой</p>
        </div>
    )
}

export default Error
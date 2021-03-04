import React from 'react';
import img from '../public/user.svg';
import Error from '../Error.js';


let Image = () => {
    return (
    <Error>        
        <img src={img} alt="Avatar" style="width:100%" className="left"/>
    </Error>
    )
}

export default Image;
import React from 'react';
import img from '../public/user.svg';
import ErrorBoundary from '../ErrorBoundary.js';

let Image = () => {
    return (  
        <ErrorBoundary>    
            <img src={img} alt="Avatar" className="left"/>
        </ErrorBoundary>
    )
}

export default Image;
// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router

const NavigationBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
};

export default NavigationBar;

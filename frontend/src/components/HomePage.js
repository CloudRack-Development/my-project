// HomePage.js
import React from 'react';
import NavigationBar from './NavigationBar.js';

const HomePage = () => {
    return (
        <div>
            <NavigationBar />
            <h1>Welcome to Our Website!</h1>
            <p>Here you can find amazing products and more.</p>
            {/* Display basic URLs */}
            <footer>
                <ul>
                    <li><a href="/terms">Terms of Service</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </footer>
        </div>
    );
};

export default HomePage;

import React from 'react';
import './AboutUs.css'; // Import the CSS file for AboutUs styling

const AboutUs = () => {
    const copyToClipboard = () => {
        const ethAddress = '0x2814e550dD5075f543D15Cc7ef39A8127a287EB4';
        navigator.clipboard.writeText(ethAddress).then(() => {
            alert('ETH address copied to clipboard!');
        });
    };

    return (
        <div className="about-container">
            <h2 className="about-title">About Me</h2>
            <p className="about-description">
                I am the current developer of this project, I enjoy gaming and listening to music on the side.
            </p>
            <p className="about-description">
                I'm slowly working on becoming a full stack developer with front/backend in many coding languages over time.
            </p>
            <p className="about-description">
                I run a store to sell Fallout 76 on the side of my daily work.
            </p>
            <p className="about-description">
                Any donations are welcome via ETH. My address can be located below:
            </p>
            <div className="eth-address">
                <span className="eth-address-text">0x2814e550dD5075f543D15Cc7ef39A8127a287EB4</span>
                <button className="copy-button" onClick={copyToClipboard}>Copy</button>
            </div>
        </div>
    );
};

export default AboutUs;

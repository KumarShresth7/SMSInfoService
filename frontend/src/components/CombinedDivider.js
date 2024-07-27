/* Example Usage in React */
import React from 'react';
import './CombinedDivider.css';
import dividerGraphic from '../assets/divider.svg'; // Replace with the path to your graphic

const CombinedDivider = () => (
    <div className="combined-divider">
        <span></span>
        <img src={dividerGraphic} alt="Section Divider" />
        <span></span>
    </div>
);

export default CombinedDivider;
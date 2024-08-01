/* Example Usage in React */
import React from 'react';
import './CombinedDivider.css';
import dividerGraphic from '../assets/divider.svg';

const CombinedDivider = () => (
    <div className="combined-divider">
        <span></span>
        <img src={dividerGraphic} alt="Section Divider" className='w-10 h-10' />
        <span></span>
    </div>
);

export default CombinedDivider;
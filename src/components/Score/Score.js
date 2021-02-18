import React from 'react';
import './Score.css';

const Score = ({distance}) => (
    <div className='score'>
        {distance}
    </div>
);

export default Score;
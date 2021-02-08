import React from 'react';
import './Score.css';

const score = ({distance}) => (
    <div className='Score'>
        {distance}
    </div>
);

export default score;
import React from 'react';
import './Position.css';

const Position = ({nick, score, recordDate}) => (
    <div className="position">
        <p>{nick}</p>
        <p>{score}</p>
        <p>{recordDate}</p>
    </div>
)

export default Position;
import React from 'react';
import './Position.css';

const position = ({nick, score, recordDate}) => (
    <div className="Position">
        <p>{nick}</p>
        <p>{score}</p>
        <p>{recordDate}</p>
    </div>
)

export default position;
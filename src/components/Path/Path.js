import React from 'react';
import './Path.css';

const Path = ({clicked, type}) => (
    <div className={'path ' + type} onClick={clicked}>
    </div>
)

export default Path;
import React from 'react';
import './Path.css';

const path = ({clicked, type}) => (
    <div className={'Path ' + type} onClick={clicked}>
    </div>
)

export default path;
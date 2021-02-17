import { render } from '@testing-library/react';
import React from 'react';
import './Backdrop.css';

const backdrop = ({visible, clicked}) => {
    return visible ? <div className='Backdrop' onClick={clicked}></div> : null;
}

export default backdrop;
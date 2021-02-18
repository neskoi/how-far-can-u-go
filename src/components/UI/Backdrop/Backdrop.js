import { render } from '@testing-library/react';
import React from 'react';
import './Backdrop.css';

const Backdrop = ({visible, clicked}) => {
    return visible ? <div className='backdrop' onClick={clicked}></div> : null;
}

export default Backdrop;
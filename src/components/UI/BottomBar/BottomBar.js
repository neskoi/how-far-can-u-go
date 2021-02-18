import React from 'react';
import './BottomBar.css';

const BottomBar = ({children}) => (
    <div className='bottomBar'>
        {children}
    </div>
)

export default BottomBar;
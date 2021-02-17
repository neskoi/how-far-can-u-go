import React from 'react';
import './Layout.css';
import Navbar from '../../components/UI/navbar/Navbar';
import BottomBar from '../../components/UI/bottomBar/bottomBar';


const layout = ({children}) => (
    <div className='Layout'>
        <Navbar/>
            <div className="Body">
                {children}
            </div>
        <BottomBar/>
    </div>
);

export default layout;
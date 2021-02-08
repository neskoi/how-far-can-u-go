import React from 'react';
import './Layout.css';
import Navbar from '../../components/UI/navbar/Navbar';
import BottomBar from '../../components/UI/bottomBar/bottomBar';


const layout = ({children}) => (
    <div className='Layout'>
        <Navbar/>
            {children}
        <BottomBar/>
    </div>
);

export default layout;
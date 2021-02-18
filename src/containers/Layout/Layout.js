import React from 'react';
import './Layout.css';
import Navbar from '../../components/UI/Navbar/Navbar';
import BottomBar from '../../components/UI/BottomBar/BottomBar';


const Layout = ({children}) => (
    <div className='layout'>
        <Navbar/>
            <div className="body">
                {children}
            </div>
        <BottomBar/>
    </div>
);

export default Layout;
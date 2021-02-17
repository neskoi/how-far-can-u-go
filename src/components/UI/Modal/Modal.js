import React from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = ({children, toClose, visible}) => {
    if(!visible){
        return null;
    }
    return (
        <div>
            <Backdrop visible={visible} clicked={toClose}/>
            <div className='Modal'>
                {children}
            </div>
        </div>
    )
}

export default modal;
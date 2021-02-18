import React from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({children, toClose, visible}) => {
    if(!visible){
        return null;
    }
    return (
        <div>
            <Backdrop visible={visible} clicked={toClose}/>
            <div className='modal'>
                {children}
            </div>
        </div>
    )
}

export default Modal;
import React, { useState } from 'react'
import Avat from '../img/defaultAvatar.png'
import SetInfo from './SetInfo';

const Info = ({ open, onClose }) => {
    const [openModal, setOpenModal] = useState(false)
    if (!open) return null;
    return (
        <div className="formContainer2" >
            <div className="formWrapper">
                <span className="logo">Infomation</span>
                <span className='btnClose' onClick={onClose}>X</span>
                <img src={Avat} alt="" />
                <div className='infoWraper'>
                    <span className='title'>Email:</span><span className='value'>Demo@gmail.com</span><br />
                    <span className='title'>Name:</span><span className='value'>DemeName</span><br />
                    <span className='title'>Gentle:</span><span className='value'>Male</span><br />
                    <span className='title'>Birthday:</span><span className='value'>00/00/0000</span><br />
                </div>
                <button onClick={() => setOpenModal(true)}>Update Infomation</button>
            </div>
            <SetInfo open={openModal} onClose={() => setOpenModal(false)} />
        </div>
    )
}

export default Info
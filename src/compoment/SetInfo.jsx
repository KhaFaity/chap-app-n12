import React, { useState } from 'react'
import '../page/Info.scss'
import Avat from '../img/defaultAvatar.png'


const SetInfo = ({ open, onClose }) => {
  const [selected, setSelected] = useState();

  if (!open) return null;
  return (
    <div className="formContainer3">
      <div className="formWrapper">
        <span className="logo">Update Infomation</span>
        <span className='btnClose' onClick={onClose}>X</span>
        <form action="">
          <label htmlFor="file" className='Avatar'>
            <img src={Avat} alt="" />
          </label>
          <input className='inputText' required type="password" placeholder="password" />
          <input className='inputText' required type="password" placeholder="enter password" />
          <input className='inputText' required type="text" placeholder="display name" />
          <div style={{ display: 'flex', color: '#C18687', marginLeft: 10, marginBottom: -15, marginTop: 5 }}>
            <input required type="radio" name="gender" id="" value="Male" onChange={e => setSelected(e.target.value)} />Male
            <input required type="radio" name="gender" id="" value="Female" onChange={e => setSelected(e.target.value)} />Female
          </div>
          <label htmlFor=""></label>
          <input className='inputText' type="date" name="" id="" />
          <button>Save</button>
        </form>
      </div>
    </div>
  )
}

export default SetInfo
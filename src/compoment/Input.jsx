import React from 'react'
import myIMG from "../img/img.png";
import Attach from "../img/attach.png";

const Input = () => {
  return (
    <div className='input'>
      <input type="text"  placeholder='enter message'/>
      <div className="send">
        <img src="" alt="" />
        <input id='file' type="file" style={{display: "none"}} />
        <label htmlFor='file' style={{display: 'flex'}}>
          <img src={myIMG} alt=''/>
          <img src={Attach} alt=''/>
        </label>
        <button>send</button>
      </div>
    </div>
  )
}

export default Input
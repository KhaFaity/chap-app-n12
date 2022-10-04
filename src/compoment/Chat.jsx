import React from 'react'
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Message from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Name</span>
        <div className="chatIcon">
          <img src={Cam} /> 
          <img src={Add} />
          <img src={More} />
        </div>
      </div>
      <Message/>
      <Input/>
    </div>
  )
}

export default Chat
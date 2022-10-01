import React from 'react'
import Add from "../img/defaultAvatar.png";

const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat">
        <img src={Add} />
        <div className="userChatInfo">
          <span>Tien</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats
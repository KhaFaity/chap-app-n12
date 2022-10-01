import React from 'react'
import Add from "../img/defaultAvatar.png";

const Message = () => {
  return (
    <div>
      <div className='message'> {/** Thay thế class name để đổi vị trí tin nhẵn  */}
      <div className="messageInfo">
        <img src={Add} />
        <p>Name</p>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        {/* <img src={Add} alt="" /> */}
      </div>
    </div>
      <div className='message owner'>
      <div className="messageInfo">
        <img src={Add} />
        <p>Name</p>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        {/* <img src={Add} alt="" /> */}
      </div>
    </div>
    </div>
  )
}

export default Message
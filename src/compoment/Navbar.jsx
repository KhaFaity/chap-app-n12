import React from 'react'
import Add from "../img/defaultAvatar.png";

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat</span>
      <div className="user">
        <img src={Add} alt=''></img>
        <span>Lap</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
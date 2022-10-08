import React, { useContext } from 'react'
import Add from "../img/defaultAvatar.png";
import {signOut} from "firebase/auth"
import {auth} from "../firebase/config"
import { AuthContext } from '../context/AuthContext';
const Navbar = () => {
  const {currenUser} = useContext(AuthContext)
  return (
    <div className='navbar'>
      <span className='logo'>Chat</span>
      <div className="user">
        <img src={currenUser.photoURL} alt=''></img>
        <span>{currenUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
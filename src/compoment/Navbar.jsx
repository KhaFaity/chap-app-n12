import React, { useContext, useState } from 'react'
import {signOut} from "firebase/auth"
import {auth} from "../firebase/config"
import { AuthContext } from '../context/AuthContext';
import { HiUserAdd } from 'react-icons/hi';
import { CgLogOut } from 'react-icons/cg';
import { MdOutlineGroupAdd } from 'react-icons/md';
import AddFriend from './AddFriend';
import AddGroup from './AddGroup';
import Info from './Info';
const Navbar = () => {
  const [openInfo, seTopenInfo] = useState(false);
  const [openAddFriend, seTopenAddFriend] = useState(false);
  const [openAddGroup, setOpenAddGroup] = useState(false);
  const {currenUser} = useContext(AuthContext)
  return (
    <div className='navbar'>
      <span className='logo'>Chat</span>
      <div className="user">
        <img src={currenUser.photoURL} alt='' onClick={() => seTopenInfo(true)}></img>
        <span onClick={() => seTopenInfo(true)}>{currenUser.displayName} </span>
        <HiUserAdd className='icons' onClick={() => seTopenAddFriend(true)} />
        <MdOutlineGroupAdd className='icons' onClick={()=> setOpenAddGroup(true)}/>
        <CgLogOut className='icons' onClick={() => signOut(auth)}/>
      </div>
      <Info open={openInfo} onClose={() => seTopenInfo(false)} />

      <AddFriend open={openAddFriend} onClose={()=> seTopenAddFriend(false)} />
      <AddGroup open={openAddGroup} onClose={()=> setOpenAddGroup(false)} />
    </div>
  )
}

export default Navbar
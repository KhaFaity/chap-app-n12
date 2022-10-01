import React from 'react'
import Sidebar from './../compoment/Sidebar';
import Chat from './../compoment/Chat';
import Navbar from '../compoment/Navbar';
import "../style.scss"

export const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}
export default Home
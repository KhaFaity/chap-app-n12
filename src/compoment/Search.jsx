import React from 'react'
import Add from "../img/defaultAvatar.png";
import Find from "../img/find3.png";
// import {FaCircBiSearchleNotch} from "react-icons/hi";
import { BsSearch } from 'react-icons/bs';

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <BsSearch/>
        <input type="text" placeholder='Enter Name Find'/>
      </div>
      <div className="userChat">
        <img src={Add} />
        <div className="userChatInfo">
          <span>Tien</span>
        </div>
      </div>
    </div>
  )
}

export default Search
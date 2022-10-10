import React from 'react'
import Find from "../img/find3.png";
import UserChat from './UserChat';
import Add from "../img/defaultAvatar.png";

const AddGroup = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="formContainer2" >
      <div className="formWrapper">
        <span className="logo">Add Group</span>
        <span className='btnClose' onClick={onClose}>X</span>

        <form action="">
          <label htmlFor="file" className='Avatar'>
            <img src={Add} alt="" />
          </label>
          <input className='inputText' required type="text" placeholder="Name Group" />
          <div className='search'>
            <div className="searchForm">
              <img src={Find} />
              <input required type="text" placeholder='Add Friend Into Group ' />
            </div>
            <p>Nearly Friend</p>



            <div style={{ overflow: 'scroll', overflowX: 'hidden', height: '300px' }}>
              <div className='formCheckBox'>
                <input type="checkbox" name="" id="" /> <UserChat />
              </div>
              <div className='formCheckBox'>
                <input type="checkbox" name="" id="" /> <UserChat />
              </div>
              <div className='formCheckBox'>
                <input type="checkbox" name="" id="" /> <UserChat />
              </div>
              <div className='formCheckBox'>
                <input type="checkbox" name="" id="" /> <UserChat />
              </div>
              <div className='formCheckBox'>
                <input type="checkbox" name="" id="" /> <UserChat />
              </div>
              <div className='formCheckBox'>
                <input type="checkbox" name="" id="" /> <UserChat />
              </div>
            </div>



          </div>
          <button>Save</button>
        </form>

      </div>

    </div>
  )
}

export default AddGroup
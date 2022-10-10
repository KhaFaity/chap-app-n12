import React from 'react'
import Add from "../img/defaultAvatar.png";


const UserChat = () => {
    return (
        <div className="userChatForForm">
            <img src={Add} />
            <div className="userChatInfo">
                <span>Tien</span>
            </div>
        </div>
    )
}

export default UserChat
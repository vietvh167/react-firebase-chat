import React from 'react';
import "./list.css"
import UserInfor from './userInfor/userInfor';
import ChatList from './chatList/chatList';


const List = () => {
    return (
        <div className="list">
            <UserInfor/>
            <ChatList/>
        </div>
    )
}

export default List
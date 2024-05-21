import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
import {Link, useNavigate} from "react-router-dom";

interface UserProps {
    user : IUserModel
}

const UserComponent:FC<UserProps> = ({user}) => {
    const navigate = useNavigate();

    return (
        <div>
            <div>{user.id}, Name -{user.name},Username - {user.username}, Email:{user.email}
                <button onClick={() =>{
                    navigate(user.id.toString())
                }
                }>post</button></div>
        </div>
    );
};

export default UserComponent;
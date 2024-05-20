import React, {useEffect, useState} from 'react';
import {IUserModel} from "../models/IUserModel";
import ApiseviceUsers from "../services/api.axious.users";

const UsersComponent = () => {

    const [user, setUser] = useState<IUserModel[]>([])

    useEffect(() => {
        ApiseviceUsers.getAllUsers().then(user => setUser(user.data))
    }, []);

    return (
        <div>
            {user.map(user => <div key={user.id}>{user.id}, Name -{user.name},Username - {user.username}, Email:{user.email} <button>post</button></div>) }
        </div>
    );
};

export default UsersComponent;
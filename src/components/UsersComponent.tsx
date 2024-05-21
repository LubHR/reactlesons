import React, {useEffect, useState} from 'react';
import {IUserModel} from "../models/IUserModel";
import ApiseviceUsers from "../services/api.axious.users";
import UserComponent from "./UserComponent";

const UsersComponent = () => {

    const [user, setUser] = useState<IUserModel[]>([])

    useEffect(() => {
        ApiseviceUsers.getAllUsers().then(user => setUser(user.data))
    }, []);

    return (
        <div>
            {user.map(user => <UserComponent key = {user.id} user={user}/> )}
        </div>
    );
};

export default UsersComponent;
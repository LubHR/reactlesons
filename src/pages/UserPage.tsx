import React, {FC, useEffect, useState} from 'react';
import {usersApi} from "../services/api.services";
import {IUserModel} from "../model/IUserModel";

const UserPage:FC = () => {

    const [users, setUsers] = useState<IUserModel[]>([])
    
    useEffect(() => {
        usersApi.getAllUsers().then(value => setUsers(value.data))
    }, []);

    return (
        <div>
            {users.map(user => <div>{user.id}, {user.name}, {user.phone}, {user.username}, {user.email}</div>)}
        </div>
    );
};

export default UserPage;
import React, {FC, useEffect, useState} from 'react';
import {UserModels} from "../../models/user";
import UserComponents from "../User/UserComponents";
import {getAllUsers} from "../../services/ApiAll";

const UsersComponents: FC = () => {

    const [users, setUsers] = useState<UserModels[]>([])

    useEffect(()=>{
        getAllUsers().then(({data:{users}}) => setUsers(users));
    },[])

    return (
        <div>
            {users.map((user) => (<UserComponents user={user} key={user.id}/>))}
        </div>
    );
};

export default UsersComponents;
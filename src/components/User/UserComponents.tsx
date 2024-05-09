import React, {FC} from 'react';
import {UserModels} from "../../models/user";

interface IProps{
    user: UserModels
}

type IPropsType = IProps & {children?:React.ReactNode}

const UserComponents:FC<IPropsType> = ({user}) => {
    return (
        <div>
            {user.id}: {user.firstName} {user.lastName}
            <p>{user.gender}, {user.username}</p>
        </div>
    );
};

export default UserComponents;
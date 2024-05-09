import React, {FC} from 'react';
import {UserModels} from "../../models/user";

interface IProps{
    user: UserModels
}

type IPropsType = IProps & {children?:React.ReactNode} & {lift?:(id:number) => void};

const UserComponents:FC<IPropsType> = ({user,lift }) => {

    const heandler =() =>{
        if(lift){
            lift(user.id);
        }
    }

    return (
        <div>
            {user.id}: {user.firstName} {user.lastName}
            <p>{user.gender}, {user.username}</p>
            <div><button onClick={heandler}>Post</button></div>
            <hr/>
        </div>
    );
};

export default UserComponents;
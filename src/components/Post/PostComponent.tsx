import React, {FC} from 'react';
import {PostModel} from "../../models/PostModel";

interface IProps{
    post:PostModel;
}

type IPropsType = IProps & {children?:React.ReactNode};

const PostComponent:FC<IPropsType> = ({post}) => {
    return (
        <div>
            {post.id}
            {post.title}
            {post.userId}
            <p>{post.body}</p>
        </div>
    );
};

export default PostComponent;
import React, {FC} from 'react';
import {useParams} from "react-router-dom";
import {Interface} from "node:readline";
import {IPostModel} from "../models/IPostModel";

interface IPropsPost{
    post: IPostModel[]
}

const PostComponentforUser:FC<IPropsPost> = ({post}) => {

    return (
        <div>
            {post.map(post => <div key={post.id}>
                ID:{post.id}, Title-{post.title}, Body-{post.body}, UserID:{post.userId}
            </div>)}
        </div>
    );
};

export default PostComponentforUser;
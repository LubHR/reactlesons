import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";
import {useNavigate} from "react-router-dom";

interface PostProps {
    post: IPostModel
}

const PostComponent:FC<PostProps> = ({post}) => {

    const navigate = useNavigate();

    return (
        <div>
            <div>{post.id}, Title:{post.title}, Body:{post.body}, UserID{post.userId}
                <button onClick={() =>[
                    navigate(post.id.toString())
                ]}>comment</button>
            </div>
        </div>
    );
};

export default PostComponent;
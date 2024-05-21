import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";

interface PostProps {
    post: IPostModel
}

const PostComponent:FC<PostProps> = ({post}) => {
    return (
        <div>
            <div>{post.id}, Title:{post.title}, Body:{post.body}, UserID{post.userId}
                <button>comment</button>
            </div>
        </div>
    );
};

export default PostComponent;
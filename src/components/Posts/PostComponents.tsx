import React,{FC} from 'react';
import {IPostModules} from "../../models/IPostModules";

interface IProps{
    posts:IPostModules[]
}

const PostComponents:FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map((post) =>(<div key={post.id}>{post.id}, {post.title}</div>))
            }
        </div>
    );
};

export default PostComponents;
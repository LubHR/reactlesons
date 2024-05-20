import React, {useEffect, useState} from 'react';
import ApiServicePosts from "../services/api.axious.posts";
import {IPostModel} from "../models/IPostModel";

const PostsComponent = () => {

    const [post, setPost] = useState<IPostModel[]>([])

    useEffect(() => {
        ApiServicePosts.getAllPosts().then(posts =>setPost(posts.data))
    }, []);

    return (
        <div>
            {post.map(post => <div key={post.id}>{post.id}, Title:{post.title}, Body:{post.body}, UserID{post.userId} <button>comment</button></div>)}
        </div>
    );
};

export default PostsComponent;
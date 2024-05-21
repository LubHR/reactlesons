import React, {FC, useEffect, useState} from 'react';
import ApiServicePosts from "../services/api.axious.posts";
import {IPostModel} from "../models/IPostModel";
import PostComponent from "./PostComponent";

interface IPost {
    posts: IPostModel[];
}

const PostsComponent:FC<IPost> = ({posts}) => {

    const [post, setPost] = useState<IPostModel[]>([])

    useEffect(() => {
        ApiServicePosts.getAllPosts().then(posts =>setPost(posts.data))
    }, []);

    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComponent;
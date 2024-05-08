import React, {FC, useEffect, useState} from 'react';
import {PostModel} from "../../models/PostModel";
import PostComponent from "../Post/PostComponent";

const PostsComponents:FC = () => {

    const [posts, setPosts] = useState<PostModel[]>([])

    useEffect(()=>{
        getAllPosts.then(posts => setPosts(posts));
    },[])

    return (
        <div>
            {posts.map((post) => (<PostComponent post={post}/>))}
        </div>
    );
};

export default PostsComponents;
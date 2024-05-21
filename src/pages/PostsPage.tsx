import React, {useEffect, useState} from 'react';
import PostsComponent from "../components/PostsComponent";
import {useParams} from "react-router-dom";
import {IPostModel} from "../models/IPostModel";
import ApiseviceUsers from "../services/api.axious.users";

const PostsPage = () => {

    const {id} = useParams();

    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        if(id){
            ApiseviceUsers.getPostofUser(id)
                .then(post => setPosts(post.data))
        }
    }, [id]);

    return (
        <div>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;
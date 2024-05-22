import React, {useEffect, useState} from 'react';
import PostComponentforUser from "../components/PostComponentforUser";
import {useParams} from "react-router-dom";
import {IPostModel} from "../models/IPostModel";
import ApiServicePosts from "../services/api.axious.posts";
import ApiseviceUsers from "../services/api.axious.users";

const PostPageforUser = () => {

    const {id} = useParams();

    const [post, setPost] = useState<IPostModel[]>([])

    useEffect(() => {
        if(id){
            ApiseviceUsers.getPostforUsers(id)
                .then(value => setPost(value.data));
        }
    }, [id]);

    return (
        <div>
            <PostComponentforUser post={post}/>
        </div>
    );
};

export default PostPageforUser;
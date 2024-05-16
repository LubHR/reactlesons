import React, {useEffect, useState} from 'react';
import {postApi} from "../services/api.services";
import {AxiosResponse} from "axios";
import {IPostModel} from "../model/IPostModel";

const PostPages = () => {

    const [post, setPost] = useState<IPostModel[]>([])

    useEffect(() => {
        postApi.getAllPosts().then(value => setPost(value.data))
    }, []);

    return (
        <div>
            {post.map(post => <div>{post.id},{post.title},{post.userId},{post.body}</div>)}
        </div>
    );
};

export default PostPages;
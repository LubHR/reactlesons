import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import CommentComponentforPost from "../components/CommentComponentforPost";
import {ICommentModel} from "../models/ICommentModel";
import ApiServicePosts from "../services/api.axious.posts";

const CommentPageforPost = () => {

    const {id} = useParams()
    console.log(id)

    const [comment, setComment] = useState<ICommentModel[]>([])

    useEffect(() => {
        if(id){
            ApiServicePosts.getCommentforPost(id)
                .then(value => setComment(value.data))
        }
    }, [id]);

    return (
        <div>
            <CommentComponentforPost comment={comment}/>
        </div>
    );
};

export default CommentPageforPost;
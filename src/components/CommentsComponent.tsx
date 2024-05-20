import React, {useEffect, useState} from 'react';
import ApiServiceComments from "../services/api.axious.comments";
import {ICommentModel} from "../models/ICommentModel";

const CommentsComponent = () => {

    const [comment, setComment] = useState<ICommentModel[]>([])

    useEffect(() => {
        ApiServiceComments.getAllComments().then(comment => setComment(comment.data))
    }, []);

    return (
        <div>
            {comment.map(comment => <div key={comment.id}>{comment.id}, Name-{comment.name}, Body-{comment.body}, Email-{comment.email}, PostID-{comment.postId}</div>)}
        </div>
    );
};

export default CommentsComponent;
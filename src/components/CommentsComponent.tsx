import React, {useEffect, useState} from 'react';
import ApiServiceComments from "../services/api.axious.comments";
import {ICommentModel} from "../models/ICommentModel";
import CommentComponent from "./CommentComponent";

const CommentsComponent = () => {

    const [comment, setComment] = useState<ICommentModel[]>([])

    useEffect(() => {
        ApiServiceComments.getAllComments().then(comment => setComment(comment.data))
    }, []);

    return (
        <div>
            {comment.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsComponent;
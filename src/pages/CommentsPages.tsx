import React, {useEffect, useState} from 'react';
import {commentsApi} from "../services/api.services";
import {ICommentsModel} from "../model/ICommentsModel";

const CommentsPages = () => {

    const [comment, setComment] = useState<ICommentsModel[]>([])

    useEffect(() => {
        commentsApi.getAllComments().then(value => setComment(value.data))
    }, []);

    return (
        <div>
            {comment.map(comment => <div>{comment.id},{comment.name},{comment.email},{comment.body},{comment.postId}</div>)}
        </div>
    );
};

export default CommentsPages;
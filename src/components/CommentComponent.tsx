import React, {FC} from 'react';
import {ICommentModel} from "../models/ICommentModel";

interface CommentProps {
    comment: ICommentModel
}

const CommentComponent:FC<CommentProps> = ({comment}) => {
    return (
        <div>
            <div>{comment.id}, Name-{comment.name}, Body-{comment.body}, Email-{comment.email},
                PostID-{comment.postId}</div>
        </div>
    );
};

export default CommentComponent;
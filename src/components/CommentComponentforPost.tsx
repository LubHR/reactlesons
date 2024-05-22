import React, {FC} from 'react';
import {ICommentModel} from "../models/ICommentModel";

interface IPropsComment{
    comment: ICommentModel[]
}

const CommentComponentforPost:FC<IPropsComment> = ({comment}) => {
    return (
        <div>
            {comment.map(comment =>
                <div key={comment.id}>
                    ID:{comment.id},Name-{comment.name} , Body-{comment.body},PostID:{comment.postId},Email:{comment.email}
                </div>)}
        </div>
    );
};

export default CommentComponentforPost;
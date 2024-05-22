import React from 'react';
import PostsComponent from "../components/PostsComponent";
import {Outlet} from "react-router-dom";

const PostsPage = () => {

    return (
        <div>
            <PostsComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default PostsPage;



import {createBrowserRouter} from "react-router-dom";
import React from "react";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import FooterPageAbout from "../pages/FooterPageAbout";
import PostPageforUser from "../pages/PostPageforUser";
import CommentPageforPost from "../pages/CommentPageforPost";

export const routerconfig = createBrowserRouter(
    [
        {       path: "/",
                element:<MainLayout/>,
                children: [ /*isOutlet*/
                        {index:true,element:<HomePage/>},
                        {path:'users',element:<UsersPage/>,
                        children:[
                            {path: ':id', element: <PostPageforUser/>}
                        ]},
                        {path:'posts',element:<PostsPage/>,
                        children:[
                            {path: ':id',element:<CommentPageforPost/>}
                        ]
                        },
                        {path:'comments',element:<CommentsPage/>},
                        {path:'about', element:<FooterPageAbout/>}
                ]},

    ]
)

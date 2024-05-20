import {createBrowserRouter} from "react-router-dom";
import React from "react";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import FooterPageAbout from "../pages/FooterPageAbout";


export const routerconfig = createBrowserRouter(
    [
        {       path: "/",
                element:<MainLayout/>,
                children: [ /*isOutlet*/
                        {index:true,element:<HomePage/>},
                        {path:'users',element:<UsersPage/>},
                        {path:'posts',element:<PostsPage/>},
                        {path:'comments',element:<CommentsPage/>},
                ]},

        {path:'/about',element:<FooterPageAbout/>}
    ]
)

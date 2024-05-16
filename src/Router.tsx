import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import React from "react";
import UserPage from "./pages/UserPage";
import HomePages from "./pages/HomePages";
import About from "./pages/About";

export const routerconfig=createBrowserRouter(
    [
        {
            path:'/',
            element: <MainLayout/>,
            children:[
                {index:true, element:<HomePages/>},
                {path:'users',element:<UserPage/>},
                {path:'About', element:<About/>},
            ]
        },
    ]
)
import React from 'react';
import HeaderComponent from "../component/HeaderComponent";
import FoormComponent from "../component/FoormComponent";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
import React from 'react';
import {Link} from "react-router-dom";
import FooterPageAbout from "../pages/FooterPageAbout";

const FooterComponent = () => {
    return (
        <div>
            <hr/>
            <Link to="about">About</Link>
        </div>
    );
};

export default FooterComponent;
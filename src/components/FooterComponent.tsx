import React from 'react';
import {Link} from "react-router-dom";

const FooterComponent = () => {
    return (
        <div>
            <hr/>
            <Link to="About">About</Link>
        </div>
    );
};

export default FooterComponent;
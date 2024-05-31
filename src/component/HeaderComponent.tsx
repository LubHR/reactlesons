import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <Link to={'/'}>Auth</Link>
            <hr/>
            <Link to={'cars'}>Cars page</Link>
            <hr/>
        </div>
    );
};

export default HeaderComponent;
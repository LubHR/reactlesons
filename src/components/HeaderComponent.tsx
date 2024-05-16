import React from 'react';
import {Link} from "react-router-dom";
import

const HeaderComponent = () => {
    return (
        <div className={'HeaderdivBaty'}>
            <Link to='/'>Home</Link>
            <br/>
            <Link to="users">users</Link>
            <br/>
            <a href={''}>posts</a>
            <br/>
            <a href={''}>comments</a>
            <hr/>
        </div>
    );
};

export default HeaderComponent;
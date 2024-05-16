import React from 'react';
import {Link} from "react-router-dom";
import './HeaderCocss.css'

const HeaderComponent = () => {
    return (
        <div className={'HeaderdivBaty'}>
            <Link to='/'>Home</Link>
            <br/>
            <Link to="users">users</Link>
            <br/>
            <Link to="posts">posts</Link>
            <br/>
            <Link to='comments'>comments</Link>
        </div>
    );
};

export default HeaderComponent;
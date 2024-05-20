import React from 'react';
import {Link} from "react-router-dom";
import css from './FooterST.module.css'

const FooterComponent = () => {
    return (
        <div className={css.Footer}>
            <Link to="about">About</Link>
        </div>
    );
};

export default FooterComponent;
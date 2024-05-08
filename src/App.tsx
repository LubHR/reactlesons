import React, {useEffect} from "react";
import './App.css';
import {getAllUsers} from "./services/userapi";

const App = () => {

    useEffect(() =>{
        getAllUsers().then(value => console.log(value.data.users));
    })
    return (
        <div>

        </div>
    );
};

export default App;
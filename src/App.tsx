import React, {useState} from "react";
import './App.css';
import UsersComponents from "./components/Users/UsersComponents";
import PostComponents from "./components/Posts/PostComponents";
import {getAllPost} from "./services/ApiAll";
import {IPostModules} from "./models/IPostModules";

const App = () => {

    const [postUserid, setPostUserid] = useState<IPostModules[]>([])
    
    const lift = (id:number) =>{
        getAllPost(id).then(({data:{posts}}) => setPostUserid(posts))
    }

    return (
        <div className={'App'}>
            <div className={'user'}><UsersComponents lift={lift}/></div>
            <div className={'post'}><PostComponents posts={postUserid}/></div>
        </div>
    );
};

export default App;
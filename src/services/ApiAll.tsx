import axios, {AxiosResponse} from "axios";
import {UserModels} from "../models/user";
import {IPostModules} from "../models/IPostModules";

let axiosIn = axios.create({
    baseURL: "https://dummyjson.com/",
    headers: {'Accept': 'application/json'}
})

const getAllUsers = ():Promise<AxiosResponse<UserModels[]>> => {
    return axiosIn.get("/users");
}

// https://dummyjson.com/posts/user/1

const getAllPost = (id:number):Promise<AxiosResponse<IPostModules[]>> =>{
    return axiosIn.get("/posts/user/" + id);
}

export {getAllUsers,getAllPost}
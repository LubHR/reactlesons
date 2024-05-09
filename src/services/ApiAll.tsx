import axios, {AxiosResponse} from "axios";
import {UserResponce} from "../models/respoceuser";
import {ResponcePoste} from "../models/respocepost";

let axiosIn = axios.create({
    baseURL: "https://dummyjson.com/",
    headers: {'Accept': 'application/json'}
})

const getAllUsers = ():Promise<AxiosResponse<UserResponce>> => {
    return axiosIn.get("/users");
}

// https://dummyjson.com/posts/user/1

const getAllPost = (id:number):Promise<AxiosResponse<ResponcePoste>> =>{
    return axiosIn.get("/posts/user/" + id);
}

export {getAllUsers,getAllPost}
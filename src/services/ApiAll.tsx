import axios, {AxiosResponse} from "axios";
import {PostModel} from "../models/PostModel";

let axiosIn = axios.create({
    baseURL: "https://dummyjson.com/",
    headers: {'Accept': 'application/json'}
})

const getAllUsers = ():Promise<AxiosResponse<PostModel[]>> => {
    return axiosIn.get("/users");
}

export {getAllUsers}
import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {baseUrl} from "../constants/BaseUrl";

let BaseUrl = axios.create({
    baseURL: baseUrl,
    headers: {}
})

const ApiseviceUsers = {
    getAllUsers : async ():Promise<AxiosResponse<IUserModel[]>> =>{
        return BaseUrl.get('/users');
    },

    getPostofUser: (userId:string):Promise<AxiosResponse<IPostModel[]>> => {
        return BaseUrl.get(`/users/${userId}/posts`);
    }

}

export default ApiseviceUsers;
import axios, {AxiosInstance, AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
let BaseUrl = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {}
})

const ApiseviceUsers = {
    getAllUsers : async ():Promise<AxiosResponse<IUserModel[]>> =>{
        return BaseUrl.get("/users");
    }

}

export default ApiseviceUsers;
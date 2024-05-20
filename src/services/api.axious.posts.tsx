import axios, {AxiosResponse} from 'axios'
import {IPostModel} from "../models/IPostModel";

let BaseUrl = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers:{}
})

const ApiServicePosts = {
    getAllPosts: async ():Promise<AxiosResponse<IPostModel[]>> => {
        return BaseUrl.get("/posts");
    }
}

export default ApiServicePosts;
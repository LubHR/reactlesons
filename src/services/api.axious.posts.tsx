import axios, {AxiosResponse} from 'axios'
import {IPostModel} from "../models/IPostModel";
import {baseUrl} from "../constants/BaseUrl";
import {ICommentModel} from "../models/ICommentModel";

let BaseUrl = axios.create({
    baseURL: baseUrl,
    headers:{}
})

const ApiServicePosts = {
    getAllPosts: async ():Promise<AxiosResponse<IPostModel[]>> => {
        return BaseUrl.get("/posts");
    },

    getCommentforPost: async (postId:string):Promise<AxiosResponse<ICommentModel[]>> => {
        return BaseUrl.get(`/posts/${postId}/comments`);
    }
}

export default ApiServicePosts;
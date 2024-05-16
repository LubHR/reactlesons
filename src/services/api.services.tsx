import axios, {AxiosResponse} from 'axios';
import {IUserModel} from "../model/IUserModel";
import {IPostModel} from "../model/IPostModel";
import {ICommentsModel} from "../model/ICommentsModel";
let baseApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
})

const usersApi = {
    getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
        return baseApi.get('/users');
    }
}

const postApi = {
    getAllPosts: (): Promise<AxiosResponse<IPostModel[]>> => {
        return baseApi.get('/posts');
    }
}

const commentsApi = {
    getAllComments:():Promise<AxiosResponse<ICommentsModel[]>> =>{
        return baseApi.get('/comments');
    }
}



export {
    usersApi,
    postApi,
    commentsApi
}
import axios, {AxiosResponse} from 'axios';
import {ICommentModel} from "../models/ICommentModel";

let BaseUrl = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers:{}
})

const ApiServiceComments = {
    getAllComments:async ():Promise<AxiosResponse<ICommentModel[]>> => {
        return BaseUrl.get("/comments");
    }
}

export default ApiServiceComments;
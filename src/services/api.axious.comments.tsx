import axios, {AxiosResponse} from 'axios';
import {ICommentModel} from "../models/ICommentModel";
import {baseUrl} from "../constants/BaseUrl";

let BaseUrl = axios.create({
    baseURL: baseUrl,
    headers:{}
})

const ApiServiceComments = {
    getAllComments:async ():Promise<AxiosResponse<ICommentModel[]>> => {
        return BaseUrl.get("/comments");
    }
}

export default ApiServiceComments;
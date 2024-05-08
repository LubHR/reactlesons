import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-Type': 'application/json'
    }
})

const getAllUsers = () => {
    return axiosInstance.get('/users')
}

export {getAllUsers};


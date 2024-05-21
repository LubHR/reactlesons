
const baseUrl:string = "https://jsonplaceholder.typicode.com";

const urls ={
    users:{
        allUsers: '/users',
        byId:(id:string):string => `${urls.users.allUsers}/${id}`,
    },
    posts:{
        allposts:'/posts',
        byId:(id:string):string => `${urls.posts.allposts}/${id}`,
    }
}

export {baseUrl,urls}
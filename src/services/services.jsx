 import axios from "axios";
 
 const service = axios.create({baseURL:"https://three-points.herokuapp.com/api"})
 

 export function createPost(data){
    return service.post("/posts", data)
        .then((response) => response.data)
 }
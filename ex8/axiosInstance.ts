
import axios from "axios";

const axiosInstance= axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

axiosInstance.interceptors.request.use((config)=>{
    if(config.meta?.requireAuth){
        // add auth logic
        config.headers['Authorization']='Bearer tokenID'
    }
    return config
})
export default axiosInstance
import axiosInstance from "./axiosInstance"

export interface Post{
    userid: number
    id: number
    title: string
    body:string
    
}

export async function getPosts():Promise<Post[]>{
    const response= await axiosInstance.get<Post[]>('/posts', {
        meta:{
            jsonPlaceholderFeature: 'fetchPosts',
            requireAuth: false
        }
    })
    return response.data
}
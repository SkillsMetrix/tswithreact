
import client from "./client";
import { Post } from './types'

// get data

export const getPost=async(id:number):Promise<Post> =>{
    const response= await client.get<Post>(`/posts/${id}`)
    return response.data
}
export const getPosts=async():Promise<Post[]> =>{
    const response= await client.get<Post[]>(`/posts`)
    return response.data
}
export const fetchApi=async<T>(url:string):Promise<T> =>{
    const response= await client.get<T>(url)
    return response.data
}

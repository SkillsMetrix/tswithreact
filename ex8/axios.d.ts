
import 'axios' 

declare module 'axios' {
    export interface AxiosRequestConfig {
        meta? : {
            requireAuth?:boolean;
            jsonPlaceholderFeature?:string
        }
    }
    export interface AxiosResponse<T= any> {
        data: T
    }
}
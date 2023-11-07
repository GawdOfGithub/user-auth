import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { RootState } from './store'

export interface UserResponse{
    message:string
    token:string
    userId:string
}
export interface LoginRequest{
    email:string,
    password:string
}
export interface SignUpRequest{
    username:string,
    email:string,
    password:string
}
export const api = createApi(
    {
        baseQuery: fetchBaseQuery({
            baseUrl:"https://api-admin-dcc.onrender.com/user",
            prepareHeaders:(headers,{getState})=>
            {
                const token = (getState() as RootState).auth.token
                if(token){
                    console.log(token);
                    headers.set('authorization',`{token}`)
                }
                return headers
            }
        }),
        endpoints:(builder) => ({
            login:builder.mutation<UserResponse,LoginRequest>({
                query:(credentials) =>({
                    url:'login',
                    method:'POST',
                    body:credentials
                })
            }),
            signup:builder.mutation<UserResponse,SignUpRequest>({
                query:(credentials) =>({
                    url:'signup',
                    method:'POST',
                    body:credentials
                })
            }),
            

            })
    }
)
export const {useLoginMutation,useSignupMutation} = api
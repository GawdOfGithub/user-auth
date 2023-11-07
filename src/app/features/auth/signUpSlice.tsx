import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../services/store'

export interface RegisterState {
    username:string|null
    email:string|null
  token:string|null

}

const slice = createSlice({
    name:'register',
    initialState:
    {
        username:null,
        email:null,
        token:null
    } as RegisterState,
    reducers:{
        setInitialCredentials:(state,{payload:{username,email,token}}:PayloadAction<{username:string,email:string,token:string}>) =>
        {
            state.username=username
            state.email = email
            state.token = token
        }
     
    }
})
export const {setInitialCredentials} = slice.actions
export default slice.reducer
export const selectCurrentUser = (state:RootState)=> state.auth.email
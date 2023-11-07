import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../services/store'

export interface AuthState {
    email:string|null
  token:string|null

}

const slice = createSlice({
    name:'auth',
    initialState:
    {
        email:null,
        token:null
    } as AuthState,
    reducers:{
        setCredentials:(state,{payload:{email,token}}:PayloadAction<{email:string,token:string}>) =>
        {
            state.email = email
            state.token = token
        }
    }
})
export const {setCredentials} = slice.actions
export default slice.reducer
export const selectCurrentUser = (state:RootState)=> state.auth.email